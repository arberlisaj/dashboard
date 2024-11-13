import { ReactNode } from 'react';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  className?: string;
  handleClick?: () => void;
};

const Button = ({ type, children, className, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      type={type || 'button'}
      className={
        'text-gray-900 bg-white border border-gray-300 focus:outline-none active:opacity-100 hover:opacity-65 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ' +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
