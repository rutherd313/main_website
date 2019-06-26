import React, { Component } from 'react';
import styles from '../styles/main.css';

class Main extends Component {
    render() {
        return (
            <div className={styles.container}> 
                <div>
                    <h1 className={styles.display_4}>John Dueno</h1>
                    <p className={styles.lead_1}>Javascript | ReactJS</p>
                    <hr class="my-4"/>
                    <p className={styles.lead_1}>Junior Full Stack JavaScript developer specializing in React Framework</p>
                    
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="https://github.com/rutherd313" target="_blank" role="button">GitHub</a>
                    </p>
                </div>
            </div>
        )}
}

export default Main;