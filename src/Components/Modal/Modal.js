import React, { Component, useState } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export function Modals({ closeModal, children }) {
    const [showModal, setShowModal] = useState('false');

    const componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    const componentWillUnmount = () => {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    const handleKeyDown = event => {
        if (event.code === 'Escape') {
            closeModal();
        }
    };

    const handleCloseModal = event => {
        const { currentTarget, target } = event;
        if (currentTarget === target) {
            this.props.closeModal();
        }
    };

    return createPortal(
        <div className={s.Overlay} onClick={this.handleCloseModal}>
            <div className={s.Modal}>{children}</div>
        </div>,
        modalRoot,
    );
}

class Modal extends Component {
    static propTypes = {
        closeModal: PropTypes.func.isRequired,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.closeModal();
        }
    };

    handleCloseModal = event => {
        const { currentTarget, target } = event;
        if (currentTarget === target) {
            this.props.closeModal();
        }
    };

    render() {
        const { children } = this.props;
        return createPortal(
            <div className={s.Overlay} onClick={this.handleCloseModal}>
                <div className={s.Modal}>{children}</div>
            </div>,
            modalRoot,
        );
    }
}

export default Modal;
