import React, { useEffect, useState, useContext } from "react";
import { Text } from "../Texts/Index"
import { Input } from "../Input/Index"
import nameIcon from "../../Assets/name-icon.svg"
import MailIcon from "../../Assets/Mail.svg"
import PasswordIcon from "../../Assets/Password.svg";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Index";
import { notification } from "antd";
import { styles } from "../../utils"
import { GlobalStateContext } from "../../context/globalContext";
import mailCheck from "../../Assets/mail-check.svg"
import passwordEyeIcon from "../../Assets/eye-pass.svg"
import authService from "../../services/auth-service"
export const Register = (props) => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm();
    const [isDisabled, setDisabled] = useState(true)
    const [disableBtn, setDisableBtn] = useState(false)
    const [load, setLoad] = useState(false)
    const { state, setState } = useContext(GlobalStateContext);
    const firstName = watch('fname');
    const lastName = watch('lname');
    const workEmail = watch('workEmail');
    const password = watch('password')

    const Notification = (type, msgType, msg) => {
        notification[type]({
            message: msgType,
            description: msg,
        });
    };

    const handleRegisterForm = async () => {
        const data = {
            "first_name": firstName,
            "last_name": lastName,
            "email": workEmail,
            "password": password
        };
        setLoad(true)
        setDisableBtn(true)
        try {
            const result = await authService.registerUser(data);
            if (result) {
                setLoad(false);
                Notification("success", "Success", result?.message)
                console.log(result?.data?.token)
                localStorage.setItem("user-token", result?.data?.token);
                setTimeout(() => {
                    setState((prevState) => ({
                        ...prevState,
                        renderingScreen: 'show-initiate-verify--email',
                    }));
                }, 1200)
            }
        } catch (err) {
            setLoad(false);
            setDisableBtn(false)
            Notification("error", "Error", err?.response?.data?.message);
        }
    }

    useEffect(() => {
        if (firstName && lastName && password && workEmail) { setDisabled(false) } else {
            setDisabled(true)
        }
    }, [firstName, lastName, workEmail, password])

    const loginRender = () => {
        setState((prevState) => ({
            ...prevState,
            renderingScreen: 'show-login',
        }));
    }
    return (
        <div>
            <div><Text type="lead-text" text="Register your account" /></div>
            <div className=""><Text type="text-xs-dark" text="Proceed to create account and setup your organization" /></div>
            <form className="registration_form pb-2">
                <div>
                    <div className="form-flex mb-3 w-100">
                        <div>
                            <div style={styles.inputContainer}>
                                <img src={nameIcon} className="px-3" style={isDisabled ? styles.iconNegate : styles.icon} />
                                <Input
                                    label="First Name"
                                    style={{ width: '95%' }}
                                    isDisabled={isDisabled}
                                    placeholder="First Name"
                                    {...register("fname", {
                                        required: "First name is required",

                                    })}
                                />

                            </div>
                            {errors.fname && (
                                <span className="validate-error">
                                    {errors.fname.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <div style={styles.inputContainer}>
                                <img src={nameIcon} className="px-3" style={isDisabled ? styles.iconNegate : styles.icon} />
                                <Input
                                    label="Last Name"
                                    isDisabled={isDisabled}
                                    placeholder="Last Name"
                                    className="w-100"
                                    {...register("lname", {
                                        required: "Last name is required",

                                    })}
                                />

                            </div>
                            {errors.lname && (
                                <span className="validate-error">
                                    {errors.lname.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="mb-3">
                        <div style={styles.inputContainer}>
                            <img src={MailIcon} className="px-3" style={isDisabled ? styles.iconNegate : styles.icon} />
                            <Input
                                placeholder="Work Email"
                                label="Work Email"
                                className="w-100"
                                isDisabled={isDisabled}
                                {...register("workEmail", {
                                    required: "Work Email is required",
                                    onChange: (e) => {
                                        setState((prevState) => ({
                                            ...prevState,
                                            onboardingEmail: e.target.value,
                                        }));
                                    },
                                    pattern: {
                                        value:
                                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]{2,}$/i,
                                        message: "Invalid Email Format",
                                    },
                                })}
                            />
                            {!isDisabled && !errors.workEmail &&
                                <div style={styles.iconright} >
                                    <img src={mailCheck} className="px-2" />
                                </div>}


                        </div>
                        {errors.workEmail && (
                            <span className="validate-error">
                                {errors.workEmail.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-3">
                        <div style={styles.inputContainer}>
                            <img src={PasswordIcon} className="px-3" style={isDisabled ? styles.iconNegate : styles.icon} />
                            <Input
                                label="Password"
                                type='password'
                                className="w-100"
                                isDisabled={isDisabled}
                                placeholder="Password"
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message:
                                            "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character",
                                    },
                                })}
                            />
                            <div style={isDisabled ? styles.iconNegateRight : styles.iconright} >
                                <img src={passwordEyeIcon} className="px-2" />
                            </div>

                        </div>
                        {errors.password && (
                            <span className="validate-error">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <br />
                    <div>
                        {isDisabled ?
                            <Button isDisabled={isDisabled} className="disabled-btn" text="Create account" classNames="w-100" /> :
                            <Button isDisabled={disableBtn} onClick={handleSubmit(handleRegisterForm)} className="amber-btn w-100" loading={load} text="Create account" classNames="w-100" />}

                    </div>
                </div>
            </form>
            <br />
            <div className="text__sm--dark pt-2" >By clicking the button above, you agree to our <span className="text__sm--orange">Terms of Service </span>and <span className="text__sm--orange">Privacy Policy.</span> </div>
            <br />
            <br />

            <div className="pt-3 text__md--dark cursor">Already have an account? <span className="text__sm--orange" onClick={loginRender}>Login</span></div>
        </div>
    );
};
