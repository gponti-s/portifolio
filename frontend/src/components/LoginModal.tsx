import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ButtonShowPassword } from './ButtonShowPassword';

export const LoginModal: React.FC<{
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  handleLogin: () => void;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
}> = ({ showModal, setShowModal, handleLogin, username, setUsername, password, setPassword }) => {  
    const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false);

    return (
        <Modal className="section-black" data-bs-theme="dark" style={{ color: "white" }} show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Body className='section-black glass-effect'>
                <form>
                    <div className="mb-3 mx-1 row ">
                      <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder='Email'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-3 mx-1 row">
                        <div className="input-group">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                className="form-control"
                                id="password"
                                value={password}
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <ButtonShowPassword setVisibilite={setIsPasswordVisible} />
                        </div>
                        <Link className=" text-end mt-1" style={{ fontSize: "12px"}} to="#">Forgot password?</Link>
                    </div>
                    <div className='row mx-5'>
                        <button className="btn btn-dark text-light" type="button" style={{ alignItems: "right" }} onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-end " style={{ fontSize: "12px" }}>
                    <p className='mb-0 mt-3'>New user? <Link to="/signin">Sign Up</Link></p>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;
