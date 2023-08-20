import React, { FC } from "react";

interface LabelProps {
  htmlFor: string;
  label: string;
  isRequired?: boolean;
  className?: string;
}

const Label: FC<LabelProps> = ({ htmlFor, label, isRequired, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {label} {isRequired && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;
