export default function SummaryCard({ title, value }) {
  return (
    <div className="p-4 shadow rounded-2xl bg-white">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-xl font-bold">₹ {value}</p>
    </div>
  )
}
