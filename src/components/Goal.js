import styles from "./Goal.module.css";

const Goal = (props) => {
  return (
    <section className={styles.main}>
      <textarea
        className={styles.textarea}
        rows={4}
        placeholder="What is your main goal?"
        value={props.goal}
        spellCheck={false}
        onChange={(e) => props.updateHandler(e.target.value, "goal")}
      />
    </section>
  );
};

export default Goal;
