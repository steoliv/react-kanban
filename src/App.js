import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

// função para gerar um novo id
let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};
export default function App() {
  //usando Hook useState
  const [tasks, setTasks] = useState([]);

  // Função para adicionar um novo elemento a lista
  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    };
    //adicionar novo elemento a lista de tarefas
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  // Função para atualizar os elementos da lista caso ele encontre....
  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  //Função para deletar item
  const deleteTask = (id) => {
    setTasks((exitingTasks) => {
      return exitingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          taskState="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Fazendo"
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Completa"
          onAddTask={addTask}
          taskState="Completa"
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
