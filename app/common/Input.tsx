import React, { FC } from "react";
import { useFormContext, get } from "react-hook-form";

interface InputProps {
  className?: string;
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  errorMessage?: string;
}

const Input: FC<InputProps> = ({
  className,
  type,
  name,
  placeholder,
  value,
  errorMessage,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        value={value}
        {...register(name, { required: errorMessage })}
      />
      <p className="mt-1 text-primary-red	text-xs h-5">
        {get(errors, name) && <span>{get(errors, name).message}</span>}
      </p>
    </>
  );
};

export default Input;
