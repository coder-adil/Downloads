import { create } from 'zustand'

export const useStore = create((set) => ({
  role: "viewer",
  setRole: (role) => set({ role }),
  transactions: [
    { id: 1, date: "2024-01-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2024-01-02", amount: 200, category: "Food", type: "expense" },
  ],
  addTransaction: (tx) =>
    set((state) => ({ transactions: [...state.transactions, tx] })),
}))
