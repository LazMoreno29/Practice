import { log } from 'console';
import styles from '../components/MainList.module.css';

let taskArr = ['get milk', 'clean bathroom', 'finish homework'];

export default function MainList() {
  const taskHandler = (array: any) => {
    taskArr.forEach((task) => console.log(task));
  };
  return (
    <div className={styles.mainList}>
      <ul>
        {taskArr.map((task) => (
          <li key={Number.toString()}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
