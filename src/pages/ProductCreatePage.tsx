import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    createProduct,
    fetchProductById,
    updateProduct,
} from '../store/actions/productActions';
import { RootState } from '../store';
import Spinner from '../components/Spinner';
import {
    PageWrapper,
    Title,
    Form,
    Label,
    Input,
    SubmitButton,
    ErrorMessage,
    CancelButton,
    ButtonGroup,
    ButtonSpinner,
} from '../styles/productCreatePageStyles';

type ProductFormData = {
    name: string;
    description: string;
    price: number;
};

const ProductCreatePage: React.FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isEditMode = Boolean(id);

    const {
        selectedProduct,
        createLoading,
        createError,
        loading,
        updateError,
    } = useSelector((state: RootState) => state.products);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProductFormData>();

    useEffect(() => {
        if (isEditMode) {
            dispatch(fetchProductById(Number(id)));
        }
    }, [dispatch, id, isEditMode]);

    useEffect(() => {
        if (isEditMode && selectedProduct) {
            reset({
                name: selectedProduct.name,
                description: selectedProduct.description,
                price: selectedProduct.price,
            });
        }
    }, [selectedProduct, reset, isEditMode]);

    const onSubmit = async (data: ProductFormData) => {
        try {
            if (isEditMode && selectedProduct) {
                await dispatch(updateProduct({ ...data, id: selectedProduct.id }));
            } else {
                await dispatch(createProduct(data));
            }

            const error = isEditMode ? updateError : createError;

            if (!error) {
                navigate('/products');
            }
        } catch {
            toast.error('Something went wrong.');
        }
    };

    const handleCancel = () => {
        navigate('/products');
    };

    if (isEditMode && loading && !selectedProduct) {
        return <Spinner />;
    }

    return (
        <PageWrapper>
            <Title>{isEditMode ? 'Edit Product' : 'Create Product'}</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Product Name"
                        maxLength={50}
                        {...register('name', {
                        required: 'Name is required',
                        maxLength: {
                            value: 50,
                            message: 'Name must not exceed 50 characters',
                        },
                    })} />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </div>

                <div>
                    <Label htmlFor="description">Description</Label>
                    <Input
                        id="description"
                        type="text"
                        placeholder="Product Description"
                        maxLength={200}
                        {...register('description', {
                            required: 'Description is required',
                            maxLength: {
                                value: 200,
                                message: 'Description must not exceed 200 characters',
                            },
                        })}
                    />
                    {errors.description && (
                        <ErrorMessage>{errors.description.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                        id="price"
                        type="number"
                        step={0.01}
                        placeholder="Product Price"
                        {...register('price', {
                            required: 'Price is required',
                            min: {
                                value: 0.01,
                                message: 'Price must be greater than 0',
                            },
                            max: {
                                value: 99999.99,
                                message: 'Price must not exceed 99999.99',
                            },
                            valueAsNumber: true,
                        })}
                    />
                    {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
                </div>

                <ButtonGroup>
                    <SubmitButton type="submit" disabled={createLoading || loading}>
                        {(createLoading || loading) && <ButtonSpinner />}
                        {isEditMode ? 'Update Product' : 'Create Product'}
                    </SubmitButton>

                    <CancelButton type="button" onClick={handleCancel}>
                        Cancel
                    </CancelButton>
                </ButtonGroup>
            </Form>
        </PageWrapper>
    );
};

export default ProductCreatePage;
