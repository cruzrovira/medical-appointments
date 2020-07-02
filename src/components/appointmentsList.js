import React from "react";
import styled from "styled-components";
import Appointment from "./Appointment";
const AppointmentsListStyled = styled.div`
  .card {
    background: #fff;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  }

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
`;

const AppointmentsList = ({ appointmentList, daleteAppointment }) => {
  return (
    <AppointmentsListStyled>
      {appointmentList.length === 0 ? (
        <div className="card">
          <h2>There are no Appointments</h2>
        </div>
      ) : (
        appointmentList.map((appointment) => {
          let { id, name, lastName, date, hour, symptoms } = appointment;

          return (
            <Appointment
              id={id}
              name={name}
              lastName={lastName}
              date={date}
              hour={hour}
              symptoms={symptoms}
              daleteAppointment={daleteAppointment}
              key={id}
            />
          );
        })
      )}
    </AppointmentsListStyled>
  );
};

export default AppointmentsList;
