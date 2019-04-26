import React from 'react';
import styles from './Cockpit.css';

const cockpit = props => {
    const classes = [];
    let buttonClass = '';

    if (props.codeCadets.length <= 2) {
        classes.push(styles.red);
    }

    if (props.codeCadets.length <= 1) {
        classes.push(styles.bold);
    }

    if(props.showCadets) {
        buttonClass = styles.Red;
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Hi I'm a React App</h1>
            <p className={classes.join(' ')}>This really works, wtf!</p>
            <button className={buttonClass} onClick={props.clicked}>
                Toggle Cadets
            </button>
        </div>
    );
};

export default cockpit;
