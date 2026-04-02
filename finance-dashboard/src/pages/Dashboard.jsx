import { useStore } from '../store/useStore'
import SummaryCard from '../components/SummaryCard'
import TransactionTable from '../components/TransactionTable'
import RoleSwitcher from '../components/RoleSwitcher'

export default function Dashboard() {
  const { transactions } = useStore()

  const income = transactions.filter(t => t.type === "income").reduce((a,b)=>a+b.amount,0)
  const expense = transactions.filter(t => t.type === "expense").reduce((a,b)=>a+b.amount,0)

  return (
    <div className="space-y-6">
      <RoleSwitcher />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" value={income - expense} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expenses" value={expense} />
      </div>

      <TransactionTable />
    </div>
  )
}
