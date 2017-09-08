import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from './Components/Hello/Hello';

const hello = React.createElement(Hello, {
    name: 'World!'
});

ReactDOM.render(
    <h1> {hello} </h1>,
    document.getElementById("main")
);