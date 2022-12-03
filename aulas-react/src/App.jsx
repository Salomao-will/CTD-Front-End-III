
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { FifthClass } from './lessons/FifthClass'
import { FourthClass } from './lessons/FourthClass'
import { SeccondClass } from './lessons/SeccondClass'
import { ThirdClass } from './lessons/ThirdClass'

import { InstagramTimeLine } from "./challenges/IntagramTimeLine"
import { DHGames } from './pages/DHGames'
import { SevenClass } from './lessons/SevenClass'
import { ThirteenthClass } from './lessons/ThirteenthClass'
import { FifteenClass } from "./lessons/FifteenthClass";
import { FourteenthClass } from "./lessons/FourteenthClass";
import { MainLayout } from "./components/MainLayout";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: 'seccondClas',
          element: <SeccondClass />
        },
        {
          path:'thirdClass',
          element: <ThirdClass />
        },
        {
          path:'fourClass',
          element: <FourthClass />
        },
        {
          path:'fifthClass',
          element: <FifthClass />
        },
        {
          path:'sevenClass',
          element: <SevenClass />
        },
        {
          path:'thirteenthClass',
          element: <ThirteenthClass />
        },
        {
          path:'fourteenthClass',
          element: <FourteenthClass />
        },
        {
          path:'fifteenthClass',
          element: <FifteenClass />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
