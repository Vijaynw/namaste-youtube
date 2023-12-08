import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watch from "./components/Watch"

function App() {

  const appRouter = createBrowserRouter([{
    path : '/',
    element: <Body />,
    children:[{
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'/watch',
      element:<Watch />
    }
  ]
  }
])
  return (
    <div className="App">
      {/* <h1 className='text-3xl'>Hello World</h1> */}
    <Head />
    <RouterProvider router={appRouter} />
    {/* <Body /> */}
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
