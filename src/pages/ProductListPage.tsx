import React, {
    useEffect,
    useCallback,
    useState,
    useRef,
    useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    fetchProductsRequest,
    setPage,
    deleteProduct,
} from '../store/actions/productActions';
import { RootState } from '../store';
import { Product } from '../types';
import {
    StickyHeader,
    RefreshIconButton,
    RefreshSpinnerWrapper,
    EmptyMessage,
    RefreshButton,
    StyledProductList,
    ProductItem,
    ProductName,
    ProductPrice,
    ProductDescription,
    ActionButton,
} from '../styles/productListPageStyles';
import Spinner from '../components/Spinner';
import ConfirmModal from '../components/ConfirmModal';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

const COOLDOWN_DURATION_MS = 15000;

const ROW_HEIGHT = 130;
const LIST_HEIGHT = 500;

const ProductListPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const items = useSelector((state: RootState) => state.products.items);
    const products = useMemo(() => items?.content || [], [items?.content]);
    const totalPages = items?.totalPages || 0;
    const loading = useSelector((state: RootState) => state.products.loading);
    const page = useSelector((state: RootState) => state.products.page);

    const [productToDelete, setProductToDelete] = useState<Product | null>(null);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const [hasMoreItems, setHasMoreItems] = useState(true);
    const [cooldown, setCooldown] = useState(false);

    const cooldownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        dispatch(fetchProductsRequest(0, 10));
        dispatch(setPage(1));
    }, [dispatch]);

    const handleDeleteConfirm = useCallback(() => {
        if (productToDelete) {
            dispatch(deleteProduct(productToDelete.id));
            setProductToDelete(null);
        }
    }, [dispatch, productToDelete]);

    const loadMoreProducts = useCallback(() => {
        if (loading || isFetchingMore || page >= totalPages || cooldown) return;
        setIsFetchingMore(true);
        dispatch(fetchProductsRequest(page, 10));
        dispatch(setPage(page + 1));
    }, [dispatch, loading, isFetchingMore, page, totalPages, cooldown]);

    const handleRefresh = useCallback(() => {
        setIsRefreshing(true);
        dispatch(fetchProductsRequest(0, 10));
        dispatch(setPage(1));
        setCooldown(false);
    }, [dispatch]);

    useEffect(() => {
        if (!loading && isRefreshing) {
            setIsRefreshing(false);
        }
        if (!loading && isFetchingMore) {
            setIsFetchingMore(false);
            const fetchedAll = products.length >= totalPages * 10;
            if (fetchedAll) {
                setHasMoreItems(false);
                setCooldown(true);
                if (cooldownTimeout.current) clearTimeout(cooldownTimeout.current);
                cooldownTimeout.current = setTimeout(() => {
                    setCooldown(false);
                }, COOLDOWN_DURATION_MS);
            }
        }
    }, [loading, isRefreshing, isFetchingMore, products.length, totalPages]);

    const memoizedProducts = useMemo(() => products, [products]);

    // Row renderer for react-window FixedSizeList
    const Row = useCallback(({ index, style }: ListChildComponentProps) => {
        const product = memoizedProducts[index];
        if (!product) return null;
        return (
            <div style={style}>
                <ProductItem>
                    <div className="left">
                        <div className="header">
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                        </div>
                        <ProductDescription>{product.description}</ProductDescription>
                    </div>
                    <div className="actions">
                        <ActionButton onClick={() => navigate(`/products/edit/${product.id}`)}>
                            <EditIcon fontSize="small" />
                            Edit
                        </ActionButton>
                        <ActionButton danger onClick={() => setProductToDelete(product)}>
                            <DeleteIcon fontSize="small" />
                            Delete
                        </ActionButton>
                    </div>
                </ProductItem>
            </div>
        );
    }, [memoizedProducts, navigate]);

    // Trigger loadMoreProducts if user scrolls near end of virtualized list
    const handleItemsRendered = useCallback(
        ({ visibleStopIndex }: { visibleStopIndex: number }) => {
            if (visibleStopIndex >= memoizedProducts.length - 2 && hasMoreItems && !cooldown && !isFetchingMore) {
                loadMoreProducts();
            }
        },
        [memoizedProducts.length, hasMoreItems, cooldown, isFetchingMore, loadMoreProducts]
    );

    return (
        <div>
            <StickyHeader>
                <div className="header-left">
                    <h1>📦 Product Catalog</h1>
                    <button className="new-product-btn" onClick={() => navigate('/products/create')}>
                        <AddCircleIcon />
                        New Product
                    </button>
                </div>
                <div className="header-actions">
                    {isFetchingMore && (
                        <Spinner />
                    )}
                    <RefreshIconButton onClick={handleRefresh} disabled={isRefreshing || loading}>
                        {isRefreshing ? (
                            <RefreshSpinnerWrapper>
                                <Spinner />
                            </RefreshSpinnerWrapper>
                        ) : (
                            <RefreshIcon />
                        )}
                    </RefreshIconButton>
                </div>
            </StickyHeader>

            {(!memoizedProducts || memoizedProducts.length === 0) && !loading && (
                <EmptyMessage>
                    <p>No products available</p>
                    <RefreshButton onClick={handleRefresh} disabled={isRefreshing}>
                        {isRefreshing ? 'Refreshing...' : 'Click to Refresh'}
                    </RefreshButton>
                </EmptyMessage>
            )}

            {memoizedProducts.length > 0 && (
                <StyledProductList>
                    <List
                        height={LIST_HEIGHT}
                        itemCount={memoizedProducts.length}
                        itemSize={ROW_HEIGHT}
                        width="100%"
                        onItemsRendered={({ visibleStopIndex }) => handleItemsRendered({ visibleStopIndex })}
                    >
                        {Row}
                    </List>
                </StyledProductList>
            )}

            <ConfirmModal
                isOpen={!!productToDelete}
                message={`Are you sure you want to delete "${productToDelete?.name}"?`}
                onConfirm={handleDeleteConfirm}
                onCancel={() => setProductToDelete(null)}
            />
        </div>
    );
};

export default ProductListPage;
