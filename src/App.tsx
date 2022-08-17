import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Login from './screens/auth/Login';
import ResetPasswordForm from './screens/auth/ResetPasswordForm';
import { Route, Routes } from 'react-router-dom';
import {routes} from './routes/app.routes'
import InitiateAppointment from './components/appointment/InitiateAppointment';
import Button from './components/layout/form-controls/Button';
import TemporaryDrawer from './components/Drawer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <TemporaryDrawer></TemporaryDrawer> */}
      {/* <Button onClick={InitiateAppointment} text="hello" ></Button> */}
      {/* <InitiateAppointment></InitiateAppointment> */}
      {/* <Login></Login> */}
      {/* <ResetPasswordForm></ResetPasswordForm> */}
      <Routes>
        {/* <Route path='/' element={<Login></Login>} /> */}
        {/* <Route path='login' element={<Login></Login>} />
        <Route path='reset' element={<ResetPasswordForm></ResetPasswordForm>} /> */}
        {routes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<route.component />}
          />
        ))}
       
        
      </Routes>
    </div>
  );
}

export default App;
