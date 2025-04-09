import React from 'react';
import {Backdrop, ModalButton, ModalContainer } from '../styles/confirmModalStyles';

interface ConfirmModalProps {
    isOpen: boolean;
    title?: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
       isOpen,
       title = 'Are you sure?',
       message,
       onConfirm,
       onCancel,
   }) => {
    return (
        <Backdrop className={isOpen ? 'show' : 'hide'}>
            <ModalContainer className={isOpen ? 'show' : 'hide'}>
                <h3>{title}</h3>
                <p>{message}</p>
                <div>
                    <ModalButton variant="cancel" onClick={onCancel}>Cancel</ModalButton>
                    <ModalButton variant="confirm" onClick={onConfirm}>Delete</ModalButton>
                </div>
            </ModalContainer>
        </Backdrop>
    );
};

export default ConfirmModal;
