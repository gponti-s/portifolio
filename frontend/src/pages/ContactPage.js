import Viewport from "../components/Viewport";

export const ContactPage = () => {
  return (
    <Viewport>

      <div className="content-container">
        <div className="section section-black">
          <h1 className="section-title">Contact</h1>
          <p>Leave a message...</p>
        </div>
        <form className="section section-gray row g-3 needs-validation" data-bs-theme="dark" novalidate>
          <div className="col-md-4">
            <label for="validationFirstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationFirstName"
              required
            />
            <div className="invalid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4 ">
            <label for="validationLastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationLastName"
              required
            />
            <div className="invalid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationEmail" className="form-label">
              Email
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationEmail"
                aria-describedby="inputGroupPrepend"
                placeholder="example@email.com"
                required
              />
              <div className="invalid-feedback">Please enter an email.</div>
            </div>
          </div>
          <br></br>
          <div className="">
            <label for="validationMessage" className="form-label">
              Message
            </label>
            <div className="input-group has-validation">
              <textarea
                className="form-control"
                type="text"
                placeholder="Write your message here..."
                id="validationMessage"
                aria-describedby="inputGroupPrepend"
                required
                style={{ height: "200px" }}
              ></textarea>
              <div className="invalid-feedback">Please enter an message.</div>
            </div>
          </div>
          <br></br>
          <div className="col-auto">
            <button type="submit" className="btn btn-dark">
              Send
            </button>
          </div>
        </form>
      </div>
    </Viewport>
  );
};
