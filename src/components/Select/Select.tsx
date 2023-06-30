import { SelectStyles } from "../../styles/form";
import { SelectHTMLAttributes, forwardRef } from "react";
import { StyledSpan } from "../../styles/typography";
import { FieldError } from "react-hook-form";

interface ISelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  label?: string;
  error?: FieldError;
}

const Select = forwardRef<HTMLSelectElement, ISelectInputProps>(({ children, label, id, error, ...rest }, ref) => {
  return (
    <div className="input-container">
      {label ? <label htmlFor={id}>{label}</label> : null}
      <SelectStyles id={id} ref={ref} {...rest} error={error ? true : false}>
        {children}
      </SelectStyles>
      {error ? <StyledSpan>{error.message}</StyledSpan> : null}
    </div>
  );
});

export default Select;
