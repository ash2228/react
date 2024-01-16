import './App.css';
import Navbar from './components/navbar.js'
import Form from './components/TextForm.js'



function App() {
  return (
    <>
    <Navbar/>
    <div className="col-md-8 offset-md-2">
    <Form/>
    </div>
    </>
  );
}

export default App;
