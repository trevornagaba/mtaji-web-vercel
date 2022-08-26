import classNames from "../../utils/classnames";

export default function StatCard({
    title,
    dollarValue,
    ugxValue,
    textLeft,
    textCenter,
    textRight,
}) {
    // Create our number formatter.
    var dollar = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
        compactDisplay: "short",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
    var ugx = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "UGX",
        notation: "compact",
        compactDisplay: "short",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
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
                    {dollar.format(dollarValue)}
                </p>
                <p className="mt-1 text-sm text-grey">
                    {/* TO-DO: Update to read real time rates from yahoo, reuters etc  */}
                    {ugx.format(dollarValue * 3500)}
                </p>
            </div>
        </div>
    );
}
