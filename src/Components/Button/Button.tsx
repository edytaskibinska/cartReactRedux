import { FC, ReactNode, MouseEvent, ButtonHTMLAttributes } from "react";
import "./Button.scss";

//Button component
//S.O.L.I.D - SRP - Single Responsibility Principle
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Button: FC<IButton> = ({
  children,
  className,
  onClick,
  ...restProps
}) => {
  return (
    <button
      onClick={onClick} //S.O.L.I.D - DIP - Dependency Inversion principle
      className={`button ${className}`}
      {...restProps}//S.O.L.I.D - LSP - Liskov Substitution Principle
    >
      {children}
    </button>
  );
};

export default Button;
