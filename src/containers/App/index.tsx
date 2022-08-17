/* eslint-disable prettier/prettier */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// import Home from "./home";
// import Login from "../auth/Login";
// import TwoStepLogIn from "../auth/TwoStepLogIn";
// import { isAuthenticated } from "../../commonUtils/auth";
// import HomePage from "../HomePage";
// import Layout from "containers/Layout";
// import Sidebar from "containers/Sidebar";
import PresentationComponent from '../PresentationTemplate';
import PresentationTemplateSlide from '../presentationTemplateSlide';
import FacilitatorDelivery from '../facilitatorDelivery';
import ParticipantsDelivery from '../participantDelivery';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/presentationTemplate"
            element={<PresentationComponent />}
          />
          <Route
            path="/facilitatorDelivery"
            element={<FacilitatorDelivery />}
          />
          <Route
            path="/paticipantDelivery"
            element={<ParticipantsDelivery />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
