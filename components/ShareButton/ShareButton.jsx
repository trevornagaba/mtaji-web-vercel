import Image from "next/image";

export default function ShareButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="inline-flex px-3 py-3 border border-primary rounded-md lg:px-2.5 lg:py-2.5"
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
