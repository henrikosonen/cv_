import React, { Fragment, useState, useEffect } from 'react';
import logo from './logo.svg';
import Tiedot from './Tiedot';
import Projektit from './Projektit';
import Intrests from './Intrests';
import ProgramSkills from './ProgramSkills';
import TecnicalSkills from './TecnicalSkills';


const App =() =>  {

  useEffect(() => {
    console.log("Hello");
  }, []);

  return (

  <div>
    <div class="row" style={{padding: '5px', borderBottom:'1px'}}>
      <div class="col-md-8">
        <table>
          <tr>
            <td><h2>Henri Kosonen</h2></td>
          </tr>
          <tr>
            <td>Kiviharjunkatu 7 A 15 </td>
            <td>53100 Lappeenranta</td>
          </tr>
          <tr>
            <td>0445551461 </td>
            <td>henri.kosonen@edu.savonia.fi</td>
          </tr>
          <tr>
            <td><a href="https://www.linkedin.com/in/henri-k-63b45770/">LinkedIn</a></td>
            <td><a href="https://github.com/henrikosonen">GitHub</a></td>
          </tr>

        </table>
      </div>
      <div class="col-md-4" style={{padding:'5px'}}>   
      <div class="text-right">
        <img src={require('./me.jpg')}  height='100%' width='15%' />
      </div>
      </div>
    </div>
    <div class="row" style={{}}>
      <div class="col-md-8" style={{borderBottom:'1px'}} >
        <h2 style={{color:'blue'}}><u>Experience</u></h2>
        
        <table>
          <tr>
            <h5><u>Software engineering internship</u></h5>
          </tr>
          <tr>
            <td><b>Hurja Solutions Oy</b></td>
          </tr>
          <tr>
            <td>May 2019 - June 2019</td>
            <td>Kuopio, Finland</td>
          </tr>
          <tr>
            <td>- Software development internship</td>
          </tr>
        </table>
          <p></p>
          <table>
          <tr>
            <h5><u>IT tech</u></h5>
          </tr>
          <tr>
            <td><b>Itä-Suomen Huoltopalvelut Oy (Servica)</b></td>
          </tr>
          <tr>
            <td>Sep 2012 - Dec 2017</td>
            <td>Kuopio, Finland</td>
          </tr>
          <tr>
            <td>- Business administration duties ex. reporting, Power BI and various business intelligence programs</td>
          </tr>
          <tr>
            <td>- IT tech duties and improvement of systems</td>
          </tr>
        </table>
        <table>
          <tr>
            <h5><u>Warehouse worker</u></h5>
          </tr>
          <tr>
            <td><b>Kespro Oy</b></td>
          </tr>
          <tr>
            <td>May 2011 - Sep 2012</td>
            <td>Kuopio, Finland</td>
          </tr>
          <tr>
            <td>- Warehouse work</td>
          </tr>
        </table>

        <Projektit />
        <Intrests />
      </div>
      <div class="col-md-4">
        <p></p>
        <Tiedot />
        <ProgramSkills />
        <TecnicalSkills />
      </div>
    </div>

  </div>

  );
}

const wrapper = {
  display: 'flex',
  flex:1,

  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '50px',
  color: '#444',
  border: '1px solid #1890ff',
};

const align = {
  display: 'inline-block',
  flexDirection: 'row',
  alignContent:'flex-end',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
};

const left = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'left',
  width: '100%',
  padding: '50px',
  color: '#444',
  border: '1px solid #1890ff',
};
const right = {
  display: 'flex',
  
  flexDirection: 'column',
  alignItems: 'right',
  justifyContent: 'right',
  width: '100%',
  padding: '50px',
  color: '#444',
  border: '1px solid #1890ff',
};

export default App;
