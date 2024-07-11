import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [inputList, setInputList] = useState("");
  const [todoList, setTodoList] = useState([]);

  const submitData = () => {
    todoList.push(inputList);
    setInputList("");
  };

  console.log(JSON.stringify(todoList, null, 2));

  return (
    <section className="p-8">
      <h1 className="text-center font-bold text-xl">TODO LIST</h1>
      <div className="mt-4">
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={inputList}
            placeholder="Apa rencanamu hari ini?"
            className="border-1 w-96 p-2"
            onChange={(e) => {
              setInputList(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-gray-500 text-white px-2 rounded-md ml-2"
            onClick={submitData}
          >
            Tambah
          </button>
        </div>
        {todoList.map((item, index) => (
          <div className="border-1 p-4 shadow-md">
            <div className="bg-orange-500 p-1 w-32 rounded-md mb-2">
              <p className="text-white text-center text-sm">To Do</p>
            </div>
            <div className="flex justify-between">
              <h3 className="text-black">{item}</h3>
              <div className="flex">
                <MdDelete color="red" size={18} />
                <FaCheck color="green" size={18} className="ml-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
