import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'

function App() {
  return (
    <>
    <Navbar title={"TextUtils"} aboutText={"About ME"}/>
    <Textform heading={"Enter Text"}/>
    </>
  );
}

export default App;
