import React from 'react';

import styles from './styles.module.scss';

export const Title = ({children}) => {
  return (
    <>
      <h1 className={styles.title}>{children}</h1>
    </>
  )
};