import classNames from "../../utils/classnames";

export default function Button({
    primary,
    secondary,
    children,
    className,
    onClick,
    ...rest
}) {
    return (
        <button
            className={classNames(
                `inline-flex px-6 py-2 justify-center rounded-md`,
                // `inline-flex px-6 py-2 font-medium text-white justify-center rounded-md`,
                `border border-transparent shadow-sm`,
                primary && `text-white bg-primary hover:bg-blue-700`,
                secondary && `bg-white border border-gray-300 hover:bg-gray-100`,
                className
            )}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}
