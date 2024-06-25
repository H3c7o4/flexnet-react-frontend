interface ButtonProps {
    text: string;
    onClick: () => void;
    color: 'black' | 'red-500' | 'blue-500' | 'green-500' | 'yellow';
}

function Button({ text, onClick, color }: ButtonProps) {
    const buttonClass = `bg-${color} text-white px-4 py-2 rounded`;

    return (
        <button onClick={onClick} className={buttonClass + ' hover:bg-gray-700'}>
            {text}
        </button>
    );
}

export default Button;