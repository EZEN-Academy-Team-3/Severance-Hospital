import React, { memo } from 'react';
import { NavLink, Routes, Route } from "react-router-dom";
import styled from 'styled-components';

import Header from '../../components/MainPageHeader';
import Footer from '../../components/Footer';
import ApptHeader from './ApptHeader';
import InternetAppt from './InternetAppt';
import QuickAppt from './QuickAppt';

const ApptCont = styled.div`

`;

const Appointment = memo(() => {

    return (
      <>
      <Header />
      <ApptHeader />
      <ApptCont className='pageCont' >
        {/* navbar */}
        <nav className="tabMenu">
          <NavLink to="internet_appt">인터넷예약</NavLink>
          <NavLink to="quick_appt">처음 오신 분 빠른예약</NavLink>
        </nav>

        <Routes>
          <Route path="internet_appt" element={<InternetAppt />} />
          <Route path="quick_appt" element={<QuickAppt />} />
        </Routes>
        <div></div>
        <Footer />
      </ApptCont>
      </>
    );
});

export default Appointment;
