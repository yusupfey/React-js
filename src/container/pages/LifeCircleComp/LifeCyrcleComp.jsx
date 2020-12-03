import React, { Component, Fragment } from 'react';

class LifeCyrcleComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
        console.log('constructor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }
    //jika kita ingin merubah data consturtor diatas maka secara tidak langsung kita meriquest pada shouldComponentUpdate

    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({
                count: 2
            });
        }, 2000);
    }
    //component shouldComponentUpdate ini harus menjalankan nilai true jika ingin men update value
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return true;
    }
    componentDidUpdate(prevProps, prevState, Snapshot) {
        console.log('componentDidUpdate');

    }
    componentWillUnmount() {
        console.log('componentWillUnmount');

    }
    render() {
        console.log('render');
        return (
            <Fragment>
                Halaman LifeCircle
                <hr/>
                <button>Component Button {this.state.count}</button>
            </Fragment>
        )
    }
}

export default LifeCyrcleComp;