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
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
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
                    {formatter.format(dollarValue)}
                </p>
                <p className="mt-1 text-sm text-grey">
                    {/* TO-DO: Update to read real time rates from yahoo, reuters etc  */}
                    UGX{formatter.format(dollarValue * 0.00375)}M
                </p>
            </div>
        </div>
    );
}
