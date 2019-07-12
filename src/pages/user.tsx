import React from 'react';
import router from 'umi/router';

import styles from './user.css';
import dynamic from 'umi/dynamic';

const User = dynamic({
  loader: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(() => <div className={styles.normal}>
          <h1>Page user 1</h1>
          <button onClick={() => { router.goBack(); }}>go back</button>
          <p>I will render after 1s</p>
        </div>);
      }, /* 1s */3000);
    });
  },
});

export default User;
