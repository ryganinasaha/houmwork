import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


function Parent() {
  const name = "Nick";
  const user = {age: 32}

  return <Children user={user} name={name}  test="100" />
}


function Children (props) {
  console.log(props)

  return (
    <div>
      Hello {props.name}. Age: {props.user.age}
    </div>
  )

}


