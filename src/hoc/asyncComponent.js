import React, { Component } from 'react';

//For LazyLoading
const asyncComponent = (importComponent) => {
    return class extends Component {
        //babel-preset-stage-2
        state = {
            component: null
        }

        componentDidMount () {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }
        
        render () {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;