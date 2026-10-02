//  array of obj
import { useState } from "react"
 const expenses = [    
  {
    id: 1,
    date: "2026-09-16",
    category: "Food",
    amount: 200

    
    
  },
  {
    id: 2,
    date: "2026-09-16",
    category: "Travel",
    amount: 100,
    


  },
  {
    id: 3,
    date: "2026-09-16",
    category: "Shopping",
    amount: 200,
    

   
  },
  {
    id: 4,
    date: "2026-09-15",
    category: "Food",
    amount: 500,
    
   
  }
]
const App = () => {
  const[addExp,setAddExp]=useState(false)

  // remove duplictes, unique dates 
  const dates = [...new Set(expenses.map(expense => expense.date))]

  return (
    //outer screen
    <div className='outer  flex flex-col h-screen bg-black text-white'>
      {/* navbar */}
       <div className="navbar h-20 bg-black border-b flex justify-between items-center px-6 ">
        <div className="heading">
            <h1 className="font-bold text-white text-3xl p-2">Expense Tracker</h1>
            </div>
            <div className='btn px-2'>
        <button onClick={() => setAddExp(true)} 
        className="bg-red-500 text-white py-2 px-4 font-semibold cursor-pointer active:scale-95 rounded">
          Add Expense</button>
        </div>
        </div>
    {addExp && (
  <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
    <div className="h-80 w-96 bg-black rounded-2xl p-6 border-2 flex flex-col gap-6">
      <h1 className="font-bold text-2xl ">Add Expense</h1>
     <form className="flex flex-col gap-2">
      <div className="flex flex-col">
  <label >Date </label>
  <input className="text-gray-400" type="date" />
  </div>
  <div className="flex flex-col">

  <label>Category</label>
  <select className="text-gray-400"> 
    <option selected>Select</option>
    <option value="food" className="text-black">Food</option>
    <option value="travel" className="text-black">Travel</option>
    <option value="shopping" className="text-black">Shopping</option>
    <option value="groceries" className="text-black">Groceries</option>
     <option value="others" className="text-black">Others</option>
  </select>
  </div>

<div className="flex flex-col">
  <label>Amount</label>
  <input className='text-gray-400 border' type="number" min='0' />
  </div>
<div className="flex justify-between mt-2">
  <button className="bg-red-300 text-white hover:bg-red-500 p-2 font-semibold cursor-pointer active:scale-95 rounded">Add More</button>
  <button className="bg-green-300 text-white hover:bg-green-500 p-2 font-semibold cursor-pointer active:scale-95 rounded">Save</button>
  </div>
</form>

    </div>
  </div>
)}

        {/* main screen */}
        <div className="main flex flex-1 min-h-0">
          {/* sidebar */}

         <div className="sidebar h-full  w-64 border-r-2 px-6 py-8 flex flex-col gap-10">
          {/* stats */}
          <div className="stats flex flex-col gap-4 mt-4"> 
               <div className='flex justify-between'>
            <h3>Total Spent</h3>
        <div>₹0</div>
        </div>
        <div className='flex justify-between'>
            <h3>This Month</h3>
            <div>₹0</div>
            </div>
        <div className='flex justify-between'>
        
            <h3>Total Transactions</h3>
            <div>0</div>
            </div>
            </div>
            {/* filters */}
            
        <div className='filters flex flex-col gap-4'>
            
             <h2 className="text-xl font-semibold">Filters</h2>

      <div className="flex justify-between gap-2">
        <h3>Time</h3>
        <button className="bg-gray-400 p-2 cursor-pointer rounded">This Month</button>
      </div>

      <div className="flex justify-between gap-2">
        <h3>Category</h3>
        <button className="bg-gray-400 p-2 cursor-pointer rounded">All Categories</button>
      </div>
      </div>
       </div>
      {/* rightcontent */}
     
              
          
            <div className='rightcontent flex flex-wrap gap-10 flex-1 overflow-y-auto p-10'> 

        {/* expenses acc to unique dates */}

            {dates.map(date => {
  const dayExpenses = expenses.filter(exp => exp.date === date)
  const dayTotal = dayExpenses.reduce((total,exp)=>{
    return total+exp.amount

  },0)
  
  return (
    <div key={date}
className="cards h-60 w-52 bg-white rounded-lg p-4 flex flex-col gap-4">
  <h3 className="text-lg font-bold text-gray-600">
    {date}
    </h3>
    <div className="exp-list flex flex-col gap-2 text-black font-semibold">
      {dayExpenses.map(expense => (
        <div key={expense.id} className="flex justify-between">
          <h3>{expense.category}</h3>
          <div>₹{expense.amount}</div>
      
        </div>
      ))}
    </div>
        <div className="border-t border-gray-400 pt-2 flex justify-between text-black font-bold">
  <h3>TOTAL</h3>
  <div>₹{dayTotal}</div>
</div>
  </div>
  )
})}

              
            </div>

      
    </div>
    </div>
      
  )
}

export default App
