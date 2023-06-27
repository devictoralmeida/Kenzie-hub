import { SelectStyles } from "../../styles/form";
import React, { ForwardedRef, SelectHTMLAttributes, forwardRef } from "react";
import { StyledSpan } from "../../styles/typography";
import { IFormError } from "../Input/Input";

interface ISelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  label?: string;
  error?: IFormError;
}

const Select = forwardRef(({ children, label, id, error, ...rest }: ISelectInputProps, ref: ForwardedRef<HTMLSelectElement>) => {
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
