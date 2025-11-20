import './App.css';
import Home from './home.jsx';
import Navbar from './navbar.jsx' ;
import Skills from './skills.jsx';

const Message = (props) => {
  const {text,color}=props;
  console.log(props);
  return <div style={{backgroundColor:color}}>
    {text}
  </div>
}
const App = () => {
  return (
    <>
      <Message text="how are you" color="orange" />
      <Message text="I am fine" color="white" />
      <Message text="Ok bye then" color="green" />


      <h1></h1>
    </>
  )
}

export default App
'use client'

