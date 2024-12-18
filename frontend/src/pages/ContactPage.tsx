import { SubmitHandler, useForm } from "react-hook-form";


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  const { register, handleSubmit, reset, getValues, formState: { errors, isSubmitting} } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data);
    reset();
  }

  return (
    <>
      <div className="container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-5 section section-gray row g-3 needs-validation"
          data-bs-theme="dark"
        >
          <div className="col-md-4">
            <input
              {...register("firstName", {required: "First Name is required"})}
              type="text"
              className="form-control"
              placeholder="Fist Name"
            />
            { errors.firstName && (<p className="text-light">{`${errors.firstName.message}`}</p>)}
          </div>
          <div className="col-md-4 ">
            <input
              {...register("lastName", {required: "Last Name is requeired"})}
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
            {errors.lastName && (<p>{`${errors.lastName.message}`}</p>)}
          </div>
          <div className="col-md-4">
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                {...register("email", {required: "email is required"})}
                type="text"
                className="form-control"
                id="validationEmail"
                aria-describedby="inputGroupPrepend"
                placeholder="example@email.com"
              />
              { errors.email && (<p>{`${errors.email.message}`}</p>)}
            </div>
          </div>
          <br></br>
          <div className="input-group has-validation">
            <textarea
              {...register("message", { required: "message is required"})}
              className="form-control"
              placeholder="Write your message here..."
              id="validationMessage"
              aria-describedby="inputGroupPrepend"
              style={{ height: "200px" }}
            ></textarea>
            {errors.message && (<p>{`${errors.message.message}`}</p>)}
          </div>
          <br></br>
          <div className="col-auto">
            <button 
            type="submit" 
            className="btn btn-dark"
            disabled={isSubmitting}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
