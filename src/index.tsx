import * as React from 'react'
import './styles.scss'
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: any;
  onClick?: () => void;
  children?:any;
  props?: any;
  title?: string;
  variant?: string;
}
const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  title,
  variant,
  ...props
}) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`Button ${variant}`}
        {...props}
      >
        {title ? title : children}
      </button>
    );
  };

const App: React.FC = () => {
  return <Button  type="button" variant="primary" />
}

export default App





