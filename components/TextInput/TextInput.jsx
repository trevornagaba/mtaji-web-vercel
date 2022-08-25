import classNames from "../../utils/classnames";

export default function TextInput({
    label,
    name,
    type,
    placeholder,
    onChange,
    onFocus,
    onKeyDown,
    value,
    error,
    touched,
    leading,
    leadingSymbol,
    disabled
}) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="font-medium">
                {label}
            </label>
            <div className="relative">
                {leading && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">
                            {leadingSymbol}
                        </span>
                    </div>
                )}
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={onFocus}
                    name={name}
                    value={value}
                    className={classNames(
                        "block w-full px-3 py-3 rounded-md text-gray-700 border border-gray-300 mt-1",
                        "focus:outline-none focus:border-gray-500 focus:shadow-outline-primary focus:border-primary",
                        "text-left"
                    )}
                    disabled={disabled}
                    onKeyDown ={onKeyDown}
                />
                {!touched && error && (
                    <small className="text-red-500 mt-2">{error}</small>
                )}
            </div>
        </div>
    );
}
