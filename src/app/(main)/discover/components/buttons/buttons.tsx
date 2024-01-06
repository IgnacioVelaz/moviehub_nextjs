import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button
    type="button"
    className="py-2
     px-4 
     bg-secondary 
     text-primary 
     rounded-md 
     uppercase 
     font-bold 
     text-base 
     transition-all
     hover:bg-[#1aa762]
     cursor-pointer
     disabled:pointer-events-none
     disabled:opacity-50
     "
    onClick={onClick}
  >
    {children}
  </button>
);

export const ControlButton: FC<ButtonProps> = ({ children, onClick }) => (
  <button
    type="button"
    className="text-white text-xl p-1 transition-all hover:text-secondary hover:cursor-pointer"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
