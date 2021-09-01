import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../api/hooks';
import styles from './ProgressBar.module.scss';

export function ProgressBar() {
  //const count = useAppSelector(/*selectCount*/);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
<div className={styles.container}>
    <ul className={styles.progress}>
        <li className={styles.completed}>
        <span>
            Added
        </span>
            <div className={styles.diagonal}/>
        </li>
        <li>
        <span>
            In-check
        </span>
            <div className={styles.diagonal}/>
        </li>
        <li>
        <span>
            approved
        </span>
            <div className={styles.diagonal}/>
        </li>
        <li>
        <span>
            Active
        </span>
            <div className={styles.diagonal}/>
        </li>
        <li>
        <span>
            Inactive
        </span>
        </li>
    </ul>
</div>
  );
}
