import { useState, useRef, useEffect } from "react";

import styles from "./styles/App.module.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import Task from "./components/Task";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputElement = useRef();

  const callApi = (method, body) => {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

    const request = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(apiUrl, request)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  };

  useEffect(() => {
    callApi();
  }, []);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleTaskCheck = (e) => {
    if (inputData.length > 0 && inputData.trim()) handleTaskAddition();
    else alert("Por favor, digite uma tarefa primeiro.");

    inputElement.current.focus();
    e.preventDefault();
  };

  const handleTaskAddition = () => {
    setInputData("");

    const newTask = {
      name: inputData,
      completed: false,
    };

    callApi("POST", newTask);
  };

  const handleTaskConclusion = ({ _id, completed }) => {
    callApi("PATCH", { _id, completed });
  };

  const handleTaskEdition = ({ _id }) => {
    let editedTask = false;

    while (!editedTask) {
      const newName = prompt("Digite um novo nome para sua tarefa.");

      if (newName === null) break;

      if (newName.length > 0 && newName.trim()) {
        editedTask = true;

        callApi("PUT", { _id, newName });
      } else alert("Por favor, digite um novo nome para sua tarefa primeiro.");
    }
  };

  const handleTaskDeletion = ({ _id }) => {
    callApi("DELETE", { _id });
  };

  return (
    <div className={styles.background_container}>
      <div className={styles.task_list_container}>
        <Header>Lista de Tarefas</Header>
        <Main>
          <Form
            props={{
              handleTaskCheck,
              inputData,
              handleInputChange,
              inputElement,
            }}
          />
          <div className={styles.tasks_container}>
            {tasks.map((task) => (
              <Task
                key={task._id}
                props={{
                  task,
                  handleTaskConclusion,
                  handleTaskEdition,
                  handleTaskDeletion,
                }}
              />
            ))}
          </div>
        </Main>
      </div>
    </div>
  );
};

export default App;
