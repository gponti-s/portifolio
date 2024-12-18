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
          <div className="mb-3 mx-1 row ">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          <div className="mb-3 mx-1 row">
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          <div className='row mx-5'>
          <Button variant="dark" style={{alignItems:"right"}} onClick={handleLogin}>
          Login
        </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
