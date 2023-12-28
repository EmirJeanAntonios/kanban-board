import React from "react";
import "./styles.scss";
import classNames from "classnames";

type ButtonProps = {
  text: string | React.ReactNode;
  isLoading?: boolean;
  variant: "primary" | "secondary";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size: "small" | "medium" | "large";
};

const Button: React.FC<ButtonProps> = ({
  text,
  isLoading = false,
  variant = "primary",
  onClick,
  size = "medium",
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button",`button_${variant}`, `button_${size}`)}
    >
      {text}
      {isLoading && "Loading..."}
    </button>
  );
};

export default Button;
