import Link from "next/link";

import classNames from "../../utils/classnames";

export default function ExternalLink({ href, children, className }) {
    return (
        <Link href={href}>
            <a
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(
                    "text-[16px] text-primary hover:text-blue-700 hover:underline",
                    className
                )}
            >
                {children}
            </a>
        </Link>
    );
}
