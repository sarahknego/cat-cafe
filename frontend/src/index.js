import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
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
import dayjs from 'dayjs';

async function deleteReservation(id) {
  let result = await fetch(`https://cat-cafe-010s.onrender.com/reservations/`, {
    body: JSON.stringify({"reservation_id" : Number(id)}),
    method: "DELETE",
    headers: {"Content-Type" : "application/json"}
})
  return result.status
  //200
}

async function editReservation(formData){
  let result = await fetch(`http://localhost:5000/reservations/`, {
    body: JSON.stringify(formData),
    method: "PUT",
    headers: {"Content-Type" : "application/json"}
})
  return result.status
}

async function submitReservation(formData) {
  let result = await fetch(`http://localhost:5000/reservations/`, {
    body: JSON.stringify(formData),
    method: "POST",
    headers: {"Content-Type" : "application/json"}
})
  return redirect("/reservations")
}

async function formAction({request}) {
  let formData = await request.formData();
  let intent = formData.get("intent");
  
  let id = formData.get("reservation_id")
  
  if(intent === "delete"){
    return deleteReservation(id)
  } if(intent == "edit"){


    let data = Object.fromEntries(formData.entries())
    console.warn("DATA", data)
   
    // Make this a timestamp string that looks like '2024-04-13 10:30:00'

   let submission = JSON.parse(data.formData)
    return editReservation(submission)
  }
    return null
}

async function submitForm({request}) {
  let formData = await request.formData();
  let data = Object.fromEntries(formData.entries())
  let submission = JSON.parse(data.formData)

  return submitReservation(submission)
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
    element: <Reserve />,
    action: submitForm
  },
  {
    path: "/reservations",
    element: <Reservations />,
    loader: loaders.reservationsLoader,
    action: formAction
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
