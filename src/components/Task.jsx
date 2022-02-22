import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import styles from "../styles/Task.module.css";

const Task = ({ props }) => {
  const { task, handleTaskConclusion, handleTaskEdition, handleTaskDeletion } =
    props;

  return (
    <div
      className={styles.container}
      style={task.completed ? { borderLeft: "7px solid #0070f5" } : null}
    >
      <div
        className={styles.container_name}
        onClick={() => handleTaskConclusion(task)}
      >
        <span>{task.name}</span>
      </div>
      <div className={styles.container_icons}>
        <MdEdit
          className={styles.icons}
          onClick={() => handleTaskEdition(task)}
        />
        <FaTrashAlt
          className={styles.icons}
          onClick={() => handleTaskDeletion(task)}
        />
      </div>
    </div>
  );
};

export default Task;
