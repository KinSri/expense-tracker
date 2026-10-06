
import { useState } from "react"
import {Scroll} from "lucide-react"

const App = () => {
  const [addExp, setAddExp] = useState(false)

  return (
    // outer screen
    <div className='outer flex flex-col h-screen bg-black text-white'>

      {/* navbar */}
      <div className="navbar h-20 bg-black border-b flex justify-between items-center px-6">

        <div className="heading">
          <h1 className="font-bold text-white text-3xl p-2">
            Expense Tracker
          </h1>
        </div>

        <div className='btn px-2'>
          <button
            onClick={() => setAddExp(true)}
            className="bg-red-500 text-white py-2 px-4 font-semibold cursor-pointer active:scale-95 rounded"
          >
            + Add Expense
          </button>
        </div>

      </div>

      {/* Add Expense modal */}
      {addExp && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">

          <div className="h-auto w-96 bg-black rounded-2xl p-6 border-2 flex flex-col gap-6">

            <h1 className="font-bold text-2xl">
              Add Expense
            </h1>

            <form className="flex flex-col gap-4">

              <div className="flex flex-col gap-1">
                <label>Date</label>
                <input
                  className="text-gray-400 bg-transparent border border-gray-600 rounded p-2"
                  type="date"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Category</label>

                <select className="text-gray-400 bg-transparent border border-gray-600 rounded p-2">
                  <option selected>Select</option>
                  <option value="food" className="text-black">Food</option>
                  <option value="travel" className="text-black">Travel</option>
                  <option value="shopping" className="text-black">Shopping</option>
                  <option value="groceries" className="text-black">Groceries</option>
                  <option value="others" className="text-black">Others</option>
                </select>

              </div>

              <div className="flex flex-col gap-1">
                <label>Amount</label>

                <input
                  className='text-gray-400 bg-transparent border border-gray-600 rounded p-2'
                  type="number"
                  min='0'
                  placeholder="₹ 0"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Note <span className="text-gray-500">(optional)</span></label>

                <input
                  className='text-gray-400 bg-transparent border border-gray-600 rounded p-2'
                  type="text"
                  placeholder="Add a note..."
                />
              </div>

              <div className="flex justify-end gap-3 mt-2">

                <button
                  type="button"
                  onClick={() => setAddExp(false)}
                  className="border border-gray-600 text-gray-300 hover:bg-gray-800 p-2 px-4 font-semibold cursor-pointer rounded"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="bg-green-500 text-white hover:bg-green-600 p-2 px-4 font-semibold cursor-pointer active:scale-95 rounded"
                >
                  Save
                </button>

              </div>

            </form>

          </div>
        </div>
      )}

      {/* main screen */}
      <div className="main flex flex-1 min-h-0">

        {/* sidebar */}
        <div className="sidebar h-full w-64 border-r-2 px-6 py-8 flex flex-col gap-10">

          {/* stats */}
          <div className="stats flex flex-col gap-5 mt-4">

            <h2 className="text-xl font-semibold mb-2">
              Overview
            </h2>

            <div className='flex justify-between'>
              <h3>Total Spent</h3>
              <div>₹12,500</div>
            </div>

            <div className='flex justify-between'>
              <h3>This Month</h3>
              <div>₹4,200</div>
            </div>

            <div className='flex justify-between'>
              <h3>Transactions</h3>
              <div>24</div>
            </div>

          </div>

          {/* divider */}
          <div className="border-t border-gray-700"></div>

          {/* filters */}
          <div className='filters flex flex-col gap-5'>

            <h2 className="text-xl font-semibold">
              Filters
            </h2>

            <div className="flex flex-col gap-2">
              <h3 className="text-gray-400">Time</h3>

              <button className="bg-gray-800 border border-gray-700 p-2 cursor-pointer rounded text-left">
                This Month ▼
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-gray-400">Category</h3>

              <button className="bg-gray-800 border border-gray-700 p-2 cursor-pointer rounded text-left">
                All Categories ▼
              </button>
            </div>

          </div>

        </div>

        {/* right content */}
        <div className='rightcontent flex flex-col flex-1 overflow-y-auto p-10'>

          {/* heading */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">
              Expenses
            </h2>

            <p className="text-gray-500 mt-1">
              Select a filter to view your expenses
            </p>
          </div>

          {/* empty state */}
          <div className="flex flex-1 justify-center items-center">

            <div className="text-center text-gray-500">

              <div className=" flex justify-center text-5xl mb-4">
                <Scroll className="size-24 text-white"/>
              </div>

              <h3 className="text-xl font-semibold text-gray-300">
                No expenses to display
              </h3>

              <p className="mt-2">
                Your expenses will appear here after selecting a filter.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App
