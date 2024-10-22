import React from "react";

interface FormComponentProps extends React.FormHTMLAttributes<HTMLFormElement> {
  name?: string;
  className?: string;
}

const Form: React.FC<FormComponentProps> = ({
  name,
  className,
  children,
  ...props
}) => {
  return <form className={className}>{children}</form>;
};

export default Form;
