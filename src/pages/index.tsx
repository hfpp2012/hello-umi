import React from 'react';
import styles from './index.css';
import Link from 'umi/link';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { IntlProvider, FormattedDate, addLocaleData } from 'react-intl';
import { FormattedMessage } from 'umi-plugin-locale';

import(`react-intl/locale-data/zh`)
.then(localeData => {
  addLocaleData(localeData.default); // like here for example
});

export default function() {
  return (
    <IntlProvider locale="en">
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
          <li>
            <FormattedMessage id="hello" />
            <FormattedDate value={ Date.now() } />
            <DatePicker />
            <a href="https://umijs.org/guide/getting-started.html">
              Getting Started
            </a>
          </li>
          <li>
            <Link to="/user">go to /users</Link>
          </li>
        </ul>
      </div>
    </IntlProvider>
  );
}
