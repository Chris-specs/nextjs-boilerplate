// Common
import { useState } from "react";
// Icons
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const PasswordInput = (props) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <input
                type={ showPassword ? 'text' : 'password'}
                {...props}
                className={`w-full max-w-xl block bg-transparent mt-0 px-0.5 border-0 border-b-2 border-[#656565] focus:ring-0 focus:border-[#b7b7b7] ${props.className}`}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-2xl lg:text-xl absolute top-2 lg:top-3 right-2">
                {
                    showPassword
                    ? <VscEyeClosed className="text-focusable" />
                    : <VscEye className="text-focusable" />
                }
            </button>
        </div>
    )
}


/**
 * Props:
 * @param {string} type 'text' | 'password' | 'number'
 * @param {string} name
 * @param {string} placeholder
 * @param {string} className
 * @param {boolean} isRequired
 * 
 * Description:
 * 
 * This component is used to render a input field.
 **/

const Input = (props) => {

    return (
        <>
            {
                props.type === 'password' ? (
                    <PasswordInput name={props.name} placeholder={props.placeholder} className={props.className} />
                ) : (
                        <input
                            {...props}
                            className={`w-full max-w-xl block bg-transparent mt-0 px-0.5 border-0 border-b-2 border-[#656565] focus:ring-0 focus:border-[#b7b7b7] ${props.className}`}
                        />
                )
            }
        </>
    )
}

export default Input