import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="flex-shrink-0 flex items-center">
            <Link href="/">
                <div className="flex gap-3 items-center hover:cursor-pointer">
                    <Image
                        src="/assets/logo.svg"
                        alt="logo"
                        width={23}
                        height={23}
                    />
                    <span className="text-primary text-[24px] font-bold">
                        mtaji
                    </span>
                </div>
            </Link>
        </div>
    );
}
