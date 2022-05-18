import React, { useEffect } from "react";
import { subscribeState } from "@crestron/ch5-crcomlib";
import logo from "./logo.svg";
import "./App.css";

function App() {
    useEffect(() => {
        subscribeState("b", "Csig.Hard_Button_1.Press", (value: boolean) => {
            console.log("Hard Button 1 Pressed: ", value);
        });
        subscribeState("b", "Csig.Hard_Button_2.Press", (value: boolean) => {
            console.log("Hard Button 2 Pressed: ", value);
        });
        subscribeState("b", "Csig.Hard_Button_3.Press", (value: boolean) => {
            console.log("Hard Button 3 Pressed: ", value);
        });
        subscribeState("b", "Csig.Hard_Button_4.Press", (value: boolean) => {
            console.log("Hard Button 4 Pressed: ", value);
        });
        subscribeState("b", "Csig.Hard_Button_5.Press", (value: boolean) => {
            console.log("Hard Button 5 Pressed: ", value);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
