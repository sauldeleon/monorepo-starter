// A mock function to mimic making an async request for data
export const fetchCount: (amount: number) => Promise<{ data: number }> = (amount = 1) => {
  return new Promise(resolve => setTimeout(() => resolve({ data: amount }), 500))
}
