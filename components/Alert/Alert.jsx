export default function Alert({ message, type, onClose }) {
  return (
    <>
      <div>
        <p>{message}</p>
      </div>

      <style jsx>{`
        div {
          background-color: #FECACA;
          border-radius: 0.25rem;
          padding: 1rem 1.5rem;
          margin-bottom: 1rem;
          margin-top: 1rem;
          position: absolute;
          width: 70vw;
          z-index: 99;
          top: 2px;
        }
        p {
          font-size: 14px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
