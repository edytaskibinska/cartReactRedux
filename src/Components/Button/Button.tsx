import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import "./Button.scss";

//Button component
//S.O.L.I.D - SRP - Single Responsibility Principle
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<any>) => void ; 
}

const Button: FC<IButton> = ({
  id,
  children,
  className,
  disabled,
  onClick,
  ...restProps
}) => {
  return (
    <button
      id={id}
      onClick={onClick} //S.O.L.I.D - DIP - Dependency Inversion principle
      className={`button ${className}`}
      disabled={disabled}
      {...restProps} //S.O.L.I.D - LSP - Liskov Substitution Principle
    >
      {children}
    </button>
  );
};

export default Button;
