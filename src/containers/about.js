import React, { Component } from 'react';
import styles from '../styles/about.css';

class About extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          show: false
        }
        this.doSomething = this.doSomething.bind(this);
        // this.toggleShow = this.toggleShow.bind(this);
        // this.hide = this.hide.bind(this);
      }

      doSomething(e){
        e.preventDefault();
        console.log(e.target.innerHTML);
      }
    

    render () {
        return (
            <div className={styles.jumbotron}>
                <div>
                    <h1 className={styles.display_4}>Get to know me...</h1>
                    <p className={styles.lead}>I've started my journey in programming in 2016 learning front-end development, then <br/> expanded my curiousity 
                    learning Javascript with NodeJS and React UI framework. </p>
                    <hr style={{ background: '#ECDFDF', width: '80%' }} class="my-4"></hr>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Contact Me
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">djohnruther@yahoo.com</button>
                            <div class="dropdown-divider"></div>
                            <button class="dropdown-item" type="button">224-532-0380</button>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default About;