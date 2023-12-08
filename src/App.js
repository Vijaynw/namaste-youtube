import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      {/* <h1 className='text-3xl'>Hello World</h1> */}
    <Head />
    <Body />
    {/* Head
        Body
          sidebar
          maincontainer
            buttonlist
            videocontainer -- useeffect API call 
              videocard */}
    </div>
  );
}

export default App;
