export default function StatCard({ title, dollarValue, ugxValue }) {
    return (
        <div className="flex justify-center items-center mx-auto">
            <div className="p-4 text-center">
                <p>{title}</p>
                <p className="text-2xl font-black">${dollarValue}M</p>
                <p className="text-gray-500">UGX{ugxValue}B</p>
            </div>
        </div>
    );
}
