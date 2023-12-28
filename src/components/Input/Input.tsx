import classNames from "classnames";
import "./styles.scss";
import { InputHTMLAttributes } from "react";
type InputProps = {
  fullWidth?: boolean;
  variant: "primary" | "secondary";
};

const Input: React.FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  fullWidth = false,
  variant = "primary",
  ...props
}) => {
  return (
    <input
      type="text"
      {...props}
      className={classNames(
        "input",
        `input_${variant}`,
        fullWidth && "input_fullWidth"
      )}
    />
  );
};

export default Input;
