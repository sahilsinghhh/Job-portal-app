import React, { ReactNode, MouseEventHandler } from "react";

interface IButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disable?: boolean;
  children?: ReactNode;
}

const Button = ({
  type,
  className,
  onClick,
  disable,
  children,
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
