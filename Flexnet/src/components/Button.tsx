interface ButtonProps {
    text: string;
    onClick?: () => void;
    href?: string;
    color: 'black' | 'red-500' | 'blue-500' | 'green-500' | 'yellow';
}

function Button({ text, onClick, href, color }: ButtonProps) {
    const buttonClass = `bg-${color} text-white px-4 py-2 rounded`;
    const commonProps = {
        className: buttonClass + ' hover:bg-gray-700',
        onClick,
    };

    return href ? (
        <a href={href} {...commonProps}>
            {text}
        </a>
    ) : (
        <button {...commonProps}>
            {text}
        </button>
    );
}

export default Button;