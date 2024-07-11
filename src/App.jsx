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

  const deleteItem = (index) => {
    const newArray = [...todoList.slice(0, index), ...todoList.slice(index + 1)];
    setTodoList(newArray);
  }

  const changeStatus = (index) => {
    const newArray = [...todoList];
    setTodoList(newArray);
  }


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
          <div className="border-1 p-4 shadow-md my-2">
            <div className="flex justify-end mb-4">
              <div className="bg-blue-500 p-1 w-32 rounded-md">
                <p className="text-white text-center text-sm">To Do</p>
              </div>
            </div>
            <div className="flex justify-between">
              <h3 className="text-black">{item}</h3>
              <div className="flex">
                <MdDelete color="red" size={18} onClick={() => deleteItem(index)} className="hover:cursor-pointer" />
                <FaCheck color="green" size={18} className="ml-4" onClick={() => changeStatus(index)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
