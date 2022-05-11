import Navbar from "./components/navbar";
import './App.css';
import User from "./components/User";

function App() {

  return (
    <div className='container'>
      <Navbar  title="User App"/>
      <hr/>
      <User 
      name="Ceyhun "
      salary="5000"
      department="Computer Eng"
      />
      <User
      name="Ali"
      salary="9000"
      department="doctor"
      />
      <User/>
    </div>
  );
}

export default App;
