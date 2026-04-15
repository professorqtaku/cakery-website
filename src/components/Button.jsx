import { ButtonType } from './buttonTypes';

const Button = ({ onClick, buttonType = ButtonType.PRIMARY, children }) => {
    const baseClasses = 'px-4 py-2 rounded-full text-white hover:opacity-90 transition-opacity duration-300 font-body hover:cursor-pointer'
    const typeClasses = buttonType === ButtonType.PRIMARY ? 'bg-primary' : 'bg-secondary';

    return (
        <button onClick={onClick} className={`${baseClasses} ${typeClasses}`}>
            {children}
        </button>
    );
};

export default Button;