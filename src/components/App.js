import React,{Component} from "react";
import "./App.scss";

export default class App extends Component {
    render() {
        return (
            <h1>
                Hello  {this.props.name}
            </h1>
        );
    }
}

if (module.hot) {
    module.hot.accept();
}