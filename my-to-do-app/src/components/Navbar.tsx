import styles from '../components/Navbar.module.css';
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.taskInput}>
        <input type='text' />
        <button type='submit'>Add</button>
      </div>
    </nav>
  );
}
