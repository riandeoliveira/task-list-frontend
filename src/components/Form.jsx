import styles from "../styles/Form.module.css";
import InputText from "./InputText";
import Button from "./Button";

const Form = ({ props }) => {
  const { handleTaskCheck, inputData, handleInputChange, inputElement } = props;

  return (
    <form
      className={styles.add_task_container}
      method="POST"
      onSubmit={handleTaskCheck}
    >
      <InputText
        props={{ inputData, handleInputChange }}
        reference={inputElement}
      />
      <Button>Adicionar</Button>
    </form>
  );
};

export default Form;
