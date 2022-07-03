import classNames from "../../utils/classnames";

export default function Button({
    primary,
    children,
    className,
    onClick,
    ...rest
}) {
    return (
        <button
            className={classNames(
                `inline-flex px-6 py-2 font-medium text-white justify-center rounded-md`,
                `border border-transparent shadow-sm`,
                primary && `bg-primary hover:bg-blue-700`,
                className
            )}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}
