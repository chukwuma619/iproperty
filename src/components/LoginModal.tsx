import React from 'react';
import { ConnectWalletButton } from '@coinbase/onchainkit';

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <h2>Connect Wallet</h2>
        <ConnectWalletButton />
      </div>
    </div>
  );
};

export default LoginModal;
