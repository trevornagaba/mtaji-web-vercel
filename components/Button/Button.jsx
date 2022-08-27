import classNames from "../../utils/classnames";

export default function Button({
    primary,
    secondary,
    children,
    className,
    onClick,
    type,
    disabled,
    ...rest
}) {
    return (
        <button
            className={disabled ? `bg-white border border-gray-300 inline-flex px-6 py-2 justify-center rounded-md mb-4` : classNames(
                `inline-flex px-6 py-2 justify-center rounded-md`,
                // `inline-flex px-6 py-2 font-medium text-white justify-center rounded-md`,
                `border border-transparent shadow-sm`,
                primary && `text-white bg-primary hover:bg-blue-700`,
                secondary && `bg-white border border-gray-300 hover:bg-gray-100`,
                className
            )}
            onClick={onClick}
            type={type}
            {...rest}
            disabled = {disabled}
        >
            {children}
        </button>
    );
}
