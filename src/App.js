import UserList from './components/UserList';
import './App.css';
import MainNavbar from './components/MainNavbar';

function App() {
  return (
    <div className="App">
       <MainNavbar/>
       <div className='list'><UserList/></div>
      
     
    </div>
  );
}

export default App;
