import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter><App />
    </BrowserRouter>,document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });