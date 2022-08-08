import Head from "next/head"
import { useState } from 'react';

export default function index() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    console.log(`This is the input ${input}`);
    setTodos([...todos, input]);
    setInput("");
  };
  return (

    <div>
      <Head>
        <title>Todo App</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="flex mt-32 justify-center h-screen font-nunito">
        <div className="flex flex-col items-center">

          <div className="text-3xl font-bold text-slate-700">Welcome to My Todo App</div>

          <form>
            <input value={input} onChange={e => setInput(e.target.value)} className="border-[1.4px] rounded-sm h-8 mt-10 pl-2 w-80 border-slate-600"
              placeholder="Enter Your Task" type="text" />

            <button type="submit" onClick={addTodo} className="mt-4 border p-2 rounded-sm text-center bg-slate-700 text-white">Add Todo</button>
          </form>

          <div className="text-2xl font-semibold text-gray-600 mt-4 underline">List of Tasks</div>
          {todos.map(todo => (
            <p className="text-lg mt-3">{todo}</p>
          ))}


        </div>
      </div>
    </div>
  )
}
