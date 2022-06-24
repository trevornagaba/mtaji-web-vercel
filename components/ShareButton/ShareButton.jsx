import Image from "next/image";

export default function ShareButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="inline-flex px-2.5 py-2.5 border border-primary rounded-md"
        >
            <Image
                src="/assets/share.svg"
                alt="share button"
                height={20}
                width={20}
            />
        </button>
    );
}
