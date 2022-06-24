import Link from "next/link";

export default function ExternalLink({ href, children }) {
    return (
        <Link href={href}>
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-blue-700 hover:underline"
            >
                {children}
            </a>
        </Link>
    );
}
