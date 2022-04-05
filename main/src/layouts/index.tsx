import styles from '../pages/index.less';
import { Link, history } from 'umi';
import { useState } from 'react';

export default function IndexPage(props: any) {
  const [value, setValue] = useState('child1');
  function goToChild1() {
    setValue('child1');
    history.push('/child1');
  }

  function goToChild2() {
    setValue('child2');
    history.push('/child2');
  }

  return (
    <div>
      <h1 className={styles.title}>Page layouts and subPage {value}</h1>
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
