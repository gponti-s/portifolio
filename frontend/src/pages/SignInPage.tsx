import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react"
import { fetchCountries } from "../services/countries";
import ErrorPage from "./ErrorPage";
import {ButtonShowPassword} from "../components/ButtonShowPassword";


interface SignInFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;

}

export const SignInPage: React.FC = () => {
    const { register, handleSubmit, reset, getValues, formState: { errors, isSubmitting}} = useForm<SignInFormData>();
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);
    const [countries, setCountries] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isTermsAccepted, setIsTermsAccepted] = useState<boolean>(false);

    const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(data);
        reset();
    }

    useEffect(() => {
        const loadCountries = async () => {
            try{
                const data = await fetchCountries();
                const countryNames = data.map((country: { name: { common: string}}) => country.name.common);
                setCountries(countryNames);
            } catch (err) {
                setError((err as Error).message)
            }
        };
        loadCountries();
    }, []);

    if(error){
        return <ErrorPage message={error}/>
    }
    
    return(
        <main className="container">
            <form 
            className="mx-5 section section-gray glass-effect row g-3 needs-validation"
            onSubmit={handleSubmit(onSubmit)}
            data-bs-theme="dark"
            >
                <div className="row my-2">
                    <div className="col-md-4">
                        <input
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        {...register("firstName", {required: "First Name is required"})}
                        />
                        { errors.firstName && (<p className="text-light">{`${errors.firstName.message}`}</p>)}
                    </div>
                    <div className="col-md-4">
                        <input
                        className="form-control"
                        placeholder="Last Name"
                        type="text"
                        {...register("lastName", {required: "Last Name is required"})}
                        />
                        { errors.firstName && (<p className="text-light">{`${errors.firstName.message}`}</p>)}
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
                <div className="row my-4">
                    <div className="col-md-7">
                        <input 
                        className="form-control"
                        placeholder="Address"
                        type="text" />
                    </div>
                    <div className="col-md-4">
                        <select className="form-select" id="inputCountry" aria-placeholder="contry">
                            <option selected>Country</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>
                    </div>
                </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input
                                className="form-control"
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Password"
                                {...register("password", { required: "Password is required" })}
                            />
                            <ButtonShowPassword setVisibilite={setIsPasswordVisible} />
                        </div>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input
                                className="form-control"
                                type={isConfirmPasswordVisible ? "text" : "password"}
                                placeholder="Confirm Password"
                                {...register("confirmPassword", { required: "Confirm Password is required" })}
                            />
                            <ButtonShowPassword setVisibilite={setIsConfirmPasswordVisible} />
                        </div>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="input-group">
                        <div className="form-check">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="termAndConditions" 
                                onChange={(e) => setIsTermsAccepted(e.target.checked)}
                            />
                            <label className="form-check-label">I have read and agree to the terms</label>
                        </div>
                    </div>
                </div>
                <button 
                    type="submit" 
                    className={`btn ${isTermsAccepted ? "btn-dark" : "btn-outline-dark"} col-md-1`} 
                    disabled={!isTermsAccepted}
                >
                    Submit
                </button>
            </form>
        </main>
    );
}