import styles from "./Todos.module.css";

const Todos = (props) => {
  const keyDownHandler = (event) => {
    if (event.keyCode === 13) {
      props.updateHandler(event.target.value, "todos");
    }
  };

  return (
    <section className={styles.main}>
      <h2 className={styles.todosHeader}>To-Dos</h2>
      <ul className={styles.list}>
        {props.todos.map((todo, index) => (
          <li className={styles.listItem} key={index}>
            {todo}
            <div
              className={styles.removeIcon}
              onClick={() => props.removeHandler(todo)}
            >
              remove
            </div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        className={styles.textInput}
        placeholder="Add a new todo and press Enter..."
        spellCheck={false}
        onKeyDown={keyDownHandler}
      />
    </section>
  );
};

export default Todos;
