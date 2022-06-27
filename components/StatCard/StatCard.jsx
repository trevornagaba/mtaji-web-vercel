export default function StatCard({ title, dollarValue, ugxValue }) {
    return (
        <div className="flex justify-center items-center mx-auto">
            <div className="lg:p-4 lg:text-center">
                <p className="text-xs lg:text-sm">{title}</p>
                <p className="text-base font-black lg:text-2xl">${dollarValue}M</p>
                <p className="text-sm text-gray-500">UGX{ugxValue}B</p>
            </div>
        </div>
    );
}
