import React from 'react';
import VisibleProducts from '../../containers/VisibleProducts';
import UpdatedBasket from '../../containers/UpdatedBasket';

import styles from './main.scss';

const App = () =>
  (
    <div className={styles['main-app']}>
      <div className={styles['main-app__products']}>
        <VisibleProducts />
      </div>
      <div className={styles['main-app__basket']}>
        <UpdatedBasket />
      </div>
    </div>
  );

export default App;
