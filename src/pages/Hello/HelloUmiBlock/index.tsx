import React from 'react';
import styles from './index.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import Link from 'umi/link';

const Block: React.FC = () => {
  return (
    <div className={styles.normal}>
      <h1>I am a umi block!</h1>
      <Link to="/">home</Link>
      <Link to="/hello">link</Link>
      <Button type="primary">click me</Button>
    </div>
  );
};

export default Block;
