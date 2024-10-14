import React, { useEffect, useState, useContext } from "react";
import { Text } from "../Texts/Index"
import { Input } from "../Input/Index"
import MailIcon from "../../Assets/Mail.svg"
import PasswordIcon from "../../Assets/Password.svg";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Index";
import { styles } from "../../utils"
import mailCheck from "../../Assets/mail-check.svg"
import { GlobalStateContext } from "../../context/globalContext";
import passwordEyeIcon from "../../Assets/eye-pass.svg"
import { notification } from "antd";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import authService from "../../services/auth-service";
export const Login = (props) => {
    const {
        register,
        reset,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm();
    const [isDisabled, setDisabled] = useState(true)
    const [load, setLoad] = useState(false)
    const [eyeVisible, setEyeVisisble] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false)
    const history = useHistory()
    const { state, setState } = useContext(GlobalStateContext);
    const email = watch('email');
    const password = watch('password')

    const Notification = (type, msgType, msg) => {
        notification[type]({
            message: msgType,
            description: msg,
        });
    };

    const handleLoginForm = async () => {
        const data = {
            "email": email,
            "password": password
        };
        setLoad(true)
        setDisableBtn(true)
        try {
            const result = await authService.onLogin(data);
            if (result) {
                setLoad(false);
                Notification("success", "Success", result?.message)
                localStorage.setItem("user-token", result?.data?.token);
                localStorage.setItem("f_name", result?.data?.user.first_name);
                localStorage.setItem("l_name", result?.data?.user.last_name);
                setTimeout(() => {
                    history.push('/my-portfolio')
                }, 1200)
            }
        } catch (err) {
            setLoad(false);
            setDisableBtn(false)
        }
    }

    useEffect(() => {
        if (email && password) { setDisabled(false) } else {
            setDisabled(true)
        }
    }, [email, password])

    const registerRender = () => {
        setState((prevState) => ({
            ...prevState,
            renderingScreen: 'show-register',
        }));
    }
    return (
        <div>
            <div><Text type="lead-text" text="Log in to your account" /></div>
            <div className=""><Text type="text-xs-dark" text="Proceed to login your organization account" /></div>
            <form className="login-form pb-2">
                <div>
                    <div className="mb-3">
                        <div>
                            <div style={styles.inputContainer}>
                                <img src={MailIcon} className="px-3" style={isDisabled ? styles.iconNegate : styles.icon} />
                                <Input
                                    label="Email"
                                    style={styles.inputFull}
                                    isDisabled={isDisabled}
                                    className={isDisabled && "apply-focus"}
                                    placeholder="email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value:
                                                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]{2,}$/i,
                                            message: "Invalid Email Format",
                                        },
                                    })}
                                />
                                {!isDisabled && !errors.email &&
                                    <div style={styles.iconright} >
                                        <img src={mailCheck} className="px-2" />
                                    </div>}
                            </div>
                            {errors.email && (
                                <span className="validate-error">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                    </div>


                    <div className="mb-3">
                        <div style={styles.inputContainer}>
                            <img src={PasswordIcon} className="px-3" style={isDisabled ? styles.iconNegate : styles.icon} />
                            <Input
                                label="Password"
                                placeholder="Password"
                                isDisabled={isDisabled}
                                type={!eyeVisible ? "password" : "text"}
                                style={styles.inputFull}
                                {...register("password", {
                                    required: "Password is required",

                                })}
                            />
                            <div className="cursor" style={isDisabled ? styles.iconNegateRight : styles.iconright} onClick={() => setEyeVisisble(!eyeVisible)}>
                                {eyeVisible ? <div className="pr-2"><BsEye size={24} /></div> :
                                    <img src={passwordEyeIcon} className="px-2 " />}
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
                            <Button isDisabled={isDisabled} className="disabled-btn" text="Login" classNames="w-100" /> :
                            <Button isDisabled={disableBtn} onClick={handleSubmit(handleLoginForm)} className="amber-btn w-100" loading={load} text="Login" classNames="w-100" />}

                    </div>
                </div>
            </form>
            <br />
            <div className="text__sm--dark pt-2" >By clicking the button above, you agree to our <span className="text__sm--orange">Terms of Service </span>and <span className="text__sm--orange">Privacy Policy.</span> </div>
            <br />
            <br />

            <div className="pt-3 text__md--dark cursor">Don’t have an account? <span className="text__sm--orange" onClick={registerRender}>Register</span></div>
        </div>
    );
};
