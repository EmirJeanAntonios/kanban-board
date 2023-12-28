import React from "react";
import "./styles.scss";
import classNames from "classnames";

type ButtonProps = {
  text: string | React.ReactNode;
  isLoading?: boolean;
  variant: "primary" | "secondary" | "error";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size: "small" | "medium" | "large";
  rightEndAdornment?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  text,
  isLoading = false,
  variant = "primary",
  onClick,
  size = "medium",
  rightEndAdornment,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", `button_${variant}`, `button_${size}`)}
    >
      <span>{text}</span>
      {rightEndAdornment}
      {isLoading && "Loading..."}
    </button>
  );
};

export default Button;
