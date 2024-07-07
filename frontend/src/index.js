import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Cats from './Cats';
import Drinks from './Drinks';
import Rooms from './Rooms';
import ItemPage from './ItemPage';
import Reserve from './Reserve';
import Reservations from './Reservations';
import loaders from './loaders';
import Header from './/Components/Header/index';
import Footer from './/Components/Footer/index';
import reportWebVitals from './reportWebVitals';
import ReservationPage from './ReservationPage';

async function deleteReservation(id) {
  let result = await fetch(`https://cat-cafe-010s.onrender.com/reservations/`, {
    body: JSON.stringify({"reservation_id" : Number(id)}),
    method: "DELETE",
    headers: {"Content-Type" : "application/json"}
})
  return result.status
  //200
}

async function editReservation(id){
  //TODO: Write a PATCH fetch! 
  return "🙃"
}

async function deleteAction({request}) {
  let formData = await request.formData();
  let intent = formData.get("intent");
  let id = formData.get("reservation_id")

  if(intent === "delete"){
    return deleteReservation(id)
  } if(intent == "edit"){
    return editReservation(id)
  }else {
    return null
  }
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: loaders.appLoader
  },
  {
    path: "/reservations/:id",
    element: <ReservationPage />,
    loader: loaders.getResourceLoader
  },
  {
    path: "/:item/:id",
    element: <ItemPage />,
    loader: loaders.getResourceLoader
  },
  {
    path: "/cats",
    element: <Cats />,
    loader: loaders.catsLoader
  },
  {
    path: "/drinks",
    element: <Drinks />,
    loader: loaders.drinksLoader
  },
  {
    path: "/rooms",
    element: <Rooms />,
    loader: loaders.roomsLoader
  },
  {
    path: "/reserve",
    element: <Reserve />
  },
  {
    path: "/reservations",
    element: <Reservations />,
    loader: loaders.reservationsLoader,
    action: deleteAction
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header /> 
    <RouterProvider router={router} />
    <Footer /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
