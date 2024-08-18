import React, { FC } from 'react';

interface ModalProps {
  title: string;
  body: string | JSX.Element;
  buttonOK?: string;
  buttonClose?: string;
  onClose?: () => void;
  onOK?: () => void;
}

const ModalComponent: FC<ModalProps> = ({ title, body, buttonOK, buttonClose, onClose, onOK }) => {
  return (
    <div
      className={`modal ${onClose ? 'show' : ''}`}
      tabIndex={-1}
      role="dialog"
      style={{ display: onClose ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {body}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              {buttonClose ?? 'Cancelar'}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOK}
            >
              {buttonOK ?? 'OK'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
