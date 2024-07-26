import { FC } from "react";

type ButtonProps = {
    onClick: any,
    variant?: string;
    children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ onClick, children, variant= "text" }) => {
const variants:any= {
    success: 'border border-green-500 text-green-500',
    error: 'border border-red-500 text-red-500',
    text: 'text-blue-600'
}
  return (
    <button
      onClick={onClick}
      className={'p-3 rounded-md '+variants[variant]}
    >
      {children}
    </button>
  );
};

export default Button;