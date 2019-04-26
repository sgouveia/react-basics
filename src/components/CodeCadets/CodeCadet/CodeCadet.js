import React from 'react';
import styles from './CodeCadet.css';

const codeCadet = props => {
    return (
        <div className={styles.CodeCadet} >
            <p onClick={props.clicked}>
                I'm {props.name} and I'm {props.age} years
            </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default codeCadet;
