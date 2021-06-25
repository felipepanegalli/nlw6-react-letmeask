import React, {ButtonHTMLAttributes} from "react";
import {ButtonStyled} from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
};

const Button = ({isOutlined = false, ...props}: ButtonProps) => {
    return (
        <ButtonStyled
            className={`button ${isOutlined ? 'outlined' : ''}`}
            {...props}
        />
    )
}

export default Button;