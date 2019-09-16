import React, { Component } from 'react';
import styles from '../styles/experience.css';

class Experience extends Component {

    render () {
        return (
            <div className={styles.container_fluid}>
                <div class="row">
                    <div class="col-md-6">
                        <h2>Web Development</h2>
                        <ul class="list-group">
                            <li style={{display: 'inline'}} class="list-group-item">HTML & CSS</li>
                        </ul>
                    </div>
                    
                    <div class="col-md-6">
                    <h2>Languages</h2>
                    <ul class="list-group">
                    <li class="list-group-item">Javascript</li>
                    <li class="list-group-item">ReactJS</li>
                    <li class="list-group-item">Python</li>
                        </ul>
                    </div>
                </div>

                <div className="row" style={{margin: '10px'}}>
                    <div className="col-md-6">
                        <h2>Version-control system</h2>
                        <ul className="list-group">
                            <li class="list-group-item">Git</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h2>Relational database management system (RDBMS)</h2>
                        <ul className="list-group">
                            <li class="list-group-item">MongoDB</li>
                        </ul>
                    </div>
                </div>
                    
                <div className="row" style={{margin: '10px'}}>
                    <div className="col-md-6">
                        <h2>Command language interpreter</h2>
                        <ul className="list-group">
                            <li class="list-group-item">Command Line</li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <h2>StyleSheet</h2>
                        <ul className="list-group">
                            <li class="list-group-item">SCSS</li>
                            <li class="list-group-item">CSS</li>
                        </ul>
                    </div>
                </div>
            </div>//container fluid
        )
    }
}

export default Experience;