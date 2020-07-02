import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Form from "./components/form";
import AppointmentsList from "./components/appointmentsList";

const AppStyled = styled.div`
  h1 {
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    word-spacing: 15px;
  }
  .container {
    max-width: 1024px;
    width: 80%;
    margin: auto;
  }
  .item {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 700px) {
    .container {
      display: flex;
      justify-content: space-between;
    }
    .item {
      width: 49%;
      margin-bottom: none;
    }
  }
`;
function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  let addAppointment = (appointment) => {
    setAppointmentList([...appointmentList, appointment]);
  };
  let daleteAppointment = (id) => {
    let newAppointmentList = appointmentList.filter(
      (appointment) => appointment.id !== id
    );

    setAppointmentList(newAppointmentList);
  };

  useEffect(() => {
    let newAppointmentList = localStorage.getItem("appointmentList");
    if (newAppointmentList) {
      setAppointmentList(JSON.parse(newAppointmentList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("appointmentList", JSON.stringify(appointmentList));
  }, [appointmentList]);

  return (
    <AppStyled>
      <h1>Medical Appointments</h1>
      <div className="container">
        <div className="item">
          <Form addAppointment={addAppointment} />
        </div>
        <div className="item">
          <AppointmentsList
            appointmentList={appointmentList}
            daleteAppointment={daleteAppointment}
          />
        </div>
      </div>
    </AppStyled>
  );
}

export default App;
