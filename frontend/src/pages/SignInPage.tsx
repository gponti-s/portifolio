import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react"
import { fetchCountries } from "../services/countries";
import ErrorPage from "./ErrorPage";
import {ButtonShowPassword} from "../components/ButtonShowPassword";
import { signIn } from "../services/auth";


interface SignInFormData {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    country: string;
    birthDate: Date;
    password: string;
    confirmPassword: string;

}

export const SignInPage: React.FC = () => {
    const { register, handleSubmit, reset, getValues, formState: { errors, isSubmitting}} = useForm<SignInFormData>({
        defaultValues: {
            gender: "notInformed"
        }
    });
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);
    const [countries, setCountries] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isTermsAccepted, setIsTermsAccepted] = useState<boolean>(false);

    const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
        const result = await signIn(data);
        if (!result.success) {
            //alert(result.message);
            return <ErrorPage message={result.message || "signIn error"}/>
        } else {
            alert("You are register!!")
            reset();
        }
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
                        {...register("email", {required: "email is required",  pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        },
                        validate: {
                            notEmpty: (value) => value.trim() !== "" || "Email cannot be empty"
                        }})}
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
                    <div className="col-md-6">
                        <input 
                        className="form-control"
                        placeholder="Address"
                        type="text" />
                    </div>
                    <div className="col-md-4">
                        <select className="form-select" id="inputCountry" aria-placeholder="contry"
                        {...register("country", {required: "Country is required", validate: (value) => value != "" || "Please select a country"})}
                        >
                            <option value="">Country</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>
                        {errors.country && (<p className="text-light">{`${errors.country.message}`}</p>)}
                    </div>
                    <div className="col-md-2">
                        <select 
                        className="form-select"
                        {...register("gender")}
                        >
                            <option value="notInformed">Gender</option>
                            <option value="male">Male</option>
                            <option value="famale">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-5">
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">
                                Bith Date
                            </span>
                                <input
                                className="form-control"
                                type="date"
                                placeholder="Bith Date"
                                {...register("birthDate", {
                                    required: "Birth Date is required",
                                    validate: (value) => {
                                        const date = new Date(value);
                                        const today = new Date();
                                        return date < today || "Birth date cannot be in the future";
                                    }
                                })}
                                />
                                {errors.birthDate && (<p className="text-light">{`${errors.birthDate.message}`}</p>)}
                        </div>
                    </div>

                </div>
                </div>
                <div className="row my-2 pt-5">
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