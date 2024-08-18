// ModalComponent.tsx
import React from 'react';

interface ModalComponentProps {
  title: string;
  body: React.ReactNode;
  buttonOK: string;
  buttonClose: string;
  onClose: () => void;
  onOK: () => void;
}

const ModalComponentAdd: React.FC<ModalComponentProps> = ({ title, body, buttonOK, buttonClose, onClose, onOK }) => {
  return (
    <div className="modal show" style={{ display: 'block' }} tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {body}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>{buttonClose}</button>
            <button type="button" className="btn btn-primary" onClick={onOK}>{buttonOK}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponentAdd;
