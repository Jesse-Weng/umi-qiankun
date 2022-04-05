import styles from './index.less';
import { Link, history } from 'umi';

export default function IndexPage(props: any) {
  function goToChild1() {
    history.push('/child1');
  }
  function goToChild2() {
    history.push('/child2');
  }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div>
        <Link to="/child1">Go to child1 page</Link>
        <button onClick={() => props.history.push('/child2')}>child2</button>
      </div>
      <div>
        <button onClick={goToChild1}>child1</button>
        <button onClick={goToChild2}>child2</button>
      </div>
      <div style={{ padding: 20 }}>{props.children}</div>;
    </div>
  );
}
