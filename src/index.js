import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import HelloComponent from "./component/Hallocomponent";
import Home from "./container/Home";
// stateless componen
// const HelooWorld = () => {
// 	return <p> Hellow World from reactdom </p>
// }

//react statefullcomponent
// class StateFullComponent extends React.Component {
// 	render() {
// 		return <p> StateFUll Componen </p>
// 	}
// }

ReactDOM.render(<Home />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
