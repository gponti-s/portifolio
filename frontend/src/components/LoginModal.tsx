import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const LoginModal: React.FC<{
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  handleLogin: () => void;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
}> = ({ showModal, setShowModal, handleLogin, username, setUsername, password, setPassword }) => {  
    return (
    <Modal data-bs-theme="dark"  style={{color: "white"}} show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Body>
        <form>
          <div className="mb-3 row">
            <label htmlFor="username" className="col-sm-2 col-form-label"><b>Username</b></label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-2 col-form-label"><b>Password</b></label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
          <Button variant="secondary" style={{alignItems:"right"}} onClick={handleLogin}>
          Login
        </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
