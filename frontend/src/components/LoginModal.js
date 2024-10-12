import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function LoginModal ({ showModal, setShowModal, handleLogin, username, setUsername, password, setPassword }) {  
    return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header style={{ background: "#eeeeee" }} closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
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
        </form>
      </Modal.Body>
      <Modal.Footer style={{ background: "#eeeeee" }}>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
