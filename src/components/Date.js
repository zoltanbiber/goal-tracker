import styles from "./Date.module.css";

const DateComponent = (props) => {
  return (
    <section className={styles.main}>
      <label htmlFor="goal deadline">Deadline</label>

      <input
        type="date"
        id="goal deadline"
        className={styles.dateInput}
        placeholder="What is your main goal?"
        value={props.date}
        onChange={(e) => props.updateHandler(e.target.value, "date")}
      />
    </section>
  );
};

export default DateComponent;
