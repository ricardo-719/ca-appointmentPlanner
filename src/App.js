import React from "react";
import { RouterProvider, createBrowserRouter, Route, Redirect, NavLink, createRoutesFromChildren, createRoutesFromElements, Router } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <ContactsPage /> } >
      <Route path='/contacts' element={ <ContactsPage /> } />
      <Route path="/appointments" element={ <AppointmentsPage /> } />
    </Route>
  ))

  /*
  Implement functions to add data to
  contacts and appointments
  */
/* Adapt RouterProvider on the return */
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <RouterProvider router={ router } />
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
