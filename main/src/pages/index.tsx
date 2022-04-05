import styles from './index.less';
import { Link, history } from 'umi';
import { useState, useEffect } from 'react';

export default function IndexPage(props: any) {
  function useTitle(title: string) {
    useEffect(() => {
      document.title = title;
    });
  }
  useTitle('测试');
  // 挂载函数
  const useMount = (fn: any) => useEffect(fn, []);

  // 卸载函数
  const useUnmount = (fn: any) => useEffect(() => fn, []);

  // 挂载卸载状态函数
  const useMounted = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      !mounted && setMounted(true);
      return () => setMounted(false);
    }, []);
    return mounted;
  };

  // 更新函数
  const useUpdate = (fn: any) => {
    const mounted = useMounted();
    useEffect(() => {
      mounted && fn();
    });
  };

  const [value, setValue] = useState('child1');

  // 挂载时切换
  useMount(() => {
    goToChild2();
  });

  // 卸载时切换
  useUnmount(() => {
    goToChild2();
  });

  // 更新时切换
  useUpdate(() => {
    goToChild2();
  });

  function goToChild1() {
    setValue('child1');
    // history.push('/child1');
  }

  function goToChild2() {
    setValue('child2');
    // history.push('/child2');
  }

  useEffect(() => {
    console.log(`value:${value}`);
  }, [value]);

  return (
    <div>
      <h1 className={styles.title}>Page index and subPage {value}</h1>
      <div>
        <button onClick={goToChild1}>child1</button>
        <button onClick={goToChild2}>child2</button>
      </div>
      <div style={{ padding: 20 }}>{props.children}</div>;
    </div>
  );
}
