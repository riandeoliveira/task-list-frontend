import styles from "../styles/InputText.module.css";

const InputText = ({ props, reference }) => {
  const { inputData, handleInputChange } = props;

  return (
    <input
      autoFocus
      className={styles.add_task}
      onChange={handleInputChange}
      placeholder="Sua nova tarefa..."
      ref={reference}
      spellCheck="false"
      type="text"
      value={inputData}
    />
  );
};

export default InputText;
