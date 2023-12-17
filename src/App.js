import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watch from "./components/Watch"
import { Provider } from 'react-redux';
import appStore from "./utils/appStore"
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
    <Provider store={appStore}>
    <Head />
    <h1 style={{
    fontFamily: 'Sacramento , cursive',

    fontWeight: 400,
}}>Akshay Saini</h1>
    <RouterProvider router={appRouter} />
    </Provider>
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
