import Head from "next/head"
import { useState } from 'react';

export default function index() {

  const [todos, setTodos] = useState([]);
  return (

    <div>
      <Head>
        <title>Todo App</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="flex mt-32 justify-center h-screen font-nunito">
        <div className="flex flex-col items-center">

          <div className="text-3xl font-bold text-slate-700">Welcome to My Todo App</div>

          <input className="border-[1.4px] rounded-sm h-8 mt-10 pl-2 w-80 border-slate-600"
            placeholder="Enter Your Task" type="text" />

          <button className="mt-4 border p-2 rounded-sm text-center bg-slate-700 text-white">Submit</button>

          <div className="text-2xl font-semibold text-gray-600 mt-4 underline">List of Tasks</div>
          <p className="text-lg mt-3">Here My Tasks</p>
        </div>
      </div>
    </div>
  )
}
