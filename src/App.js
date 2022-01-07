import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Posts from './components/Posts';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Header  appname="Post Bloggers Webapp !"/>
      <Posts />
    </div>
  );
}

export default App;

