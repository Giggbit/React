/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, formState: {errors}} = useForm();
  
  const formDataSet = (data: any) => {
    console.log(data);
  };
  console.log(errors);

  return (<>
      <div className="row justify-content-center">
        <div className="col-6"></div>
      </div>
      
      <div className="row justify-content-center mt-5">
        <div className="col-4 bg-body-tertiary p-4 rounded-4">
          <form onSubmit={handleSubmit(formDataSet)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="text" className="form-control" id="exampleInputEmail1"
                {...register("email",  { required: true, pattern: /^\S+@\S+$/i })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputLogin" className="form-label">Login</label>
              <input type="text" className="form-control" id="exampleInputLogin"
                {...register("login", { required: true, minLength: 5, maxLength: 10 })}
              />
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
  </>);
}

export default Form;
