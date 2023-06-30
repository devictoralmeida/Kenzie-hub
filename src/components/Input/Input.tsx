import { StyledSpan } from "../../styles/typography";
import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyles } from "../../styles/form";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, id, error, ...rest }, ref) => {
    return (
      <div className="input-container">
        {label ? <label htmlFor={id}>{label}</label> : null}
        <InputStyles ref={ref} id={id} error={error ? true : false} {...rest} />
        {error ? <StyledSpan>{error.message}</StyledSpan> : null}
      </div>
    );
  }
);

export default Input;
