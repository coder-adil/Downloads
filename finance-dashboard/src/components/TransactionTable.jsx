import { useStore } from '../store/useStore'

export default function TransactionTable() {
  const { transactions, role } = useStore()

  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <h2 className="mb-2 font-bold">Transactions</h2>

      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {role === "admin" && (
        <button className="mt-4 px-4 py-2 bg-black text-white rounded">
          Add Transaction
        </button>
      )}
    </div>
  )
}
