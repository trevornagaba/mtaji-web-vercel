import classNames from "../../utils/classnames";

export default function StatCard({
    title,
    dollarValue,
    ugxValue,
    textLeft,
    textCenter,
    textRight,
}) {
    return (
        <div className="flex justify-center items-center mx-auto">
            <div
                className={classNames(
                    "lg:p-4",
                    textCenter && "text-center",
                    textLeft && "text-left",
                    textRight && "text-right"
                )}
            >
                <p className="mb-1 text-xs font-medium text-grey lg:text-sm">
                    {title}
                </p>
                <p className="text-[24px] font-extrabold lg:text-2xl">
                    ${dollarValue}M
                </p>
                <p className="mt-1 text-sm text-grey">UGX{ugxValue}B</p>
            </div>
        </div>
    );
}