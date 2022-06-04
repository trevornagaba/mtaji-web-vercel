export default function TextInput({
  name,
  type,
  placeholder,
  onChange,
  onFocus,
  value,
  error,
  touched,
}) {
  return (
    <>
      <div>
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          name={name}
          value={value}
        />
        {!touched && error && <p className="error-message">{error}</p>}
      </div>

      <style jsx>{`
        div {
          margin-bottom: 16px;
        }
        input {
          display: block;
          border: 1px solid #b0b0b0;
          border-radius: 10px;
          width: 100%;
          padding: 16px;
          margin: 0 auto;
        }
        inputs p:hover {
          color: #01bbc8;
        }
        .error-message {
          color: red;
          font-size: 13px;
          margin: 2px 0 0 0;
        }
      `}</style>
    </>
  );
}
