import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
    bridgeReceiveIntegerFromNative,
    bridgeReceiveBooleanFromNative,
    bridgeReceiveStringFromNative,
    bridgeReceiveObjectFromNative,
    isCrestronTouchscreen,
} from "@crestron/ch5-crcomlib";
import eruda from "eruda";

if (isCrestronTouchscreen()) {
    (window as any).bridgeReceiveIntegerFromNative =
        bridgeReceiveIntegerFromNative;
    (window as any).bridgeReceiveBooleanFromNative =
        bridgeReceiveBooleanFromNative;
    (window as any).bridgeReceiveStringFromNative =
        bridgeReceiveStringFromNative;
    (window as any).bridgeReceiveObjectFromNative =
        bridgeReceiveObjectFromNative;

    if (process.env.REACT_APP_ENV !== "production") {
        eruda.init({
            autoScale: false,
            defaults: {
                theme: "Dracula",
            },
        });

        eruda.scale(1.5);
    }
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
