import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header'
import MainContainer from './components/MainContainer';
import Body from './components/Body';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path:"/",
  element:<MainContainer/>,
  children:[
    {
      path:'/',
      element:<Body/>
    },{
      path:'watch',
      element:<WatchPage/>
    }
  ]
}])


function App() {

  return (
    <>
    <Header/>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
