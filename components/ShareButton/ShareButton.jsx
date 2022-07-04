import Image from "next/image";

export default function ShareButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="inline-flex px-3 py-3 border border-primary rounded-md lg:px-2.5 lg:py-2.5"
            // className="inline-flex px-2.5 py-2.5 border border-primary rounded-md lg:px-2 lg:py-2"
        >
            <Image
                src="/assets/share.svg"
                alt="share button"
                height={25}
                width={25}
            />
        </button>
    );
}
