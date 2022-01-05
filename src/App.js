import './App.css';
import Header from './components/Header';
import HelloWorld from './components/HelloWorld';
import Posts from './components/Posts';

function App() {
  return (
    <div className='container'>
      <Header  appname="Post Bloggers Webapp !"/>
      <Posts />
      {/* <HelloWorld  username="Tony Stack"/> */}
    </div>
  );
}

export default App;

