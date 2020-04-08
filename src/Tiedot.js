import React, { Component } from 'react';

const Tiedot = () => {
    return (
      <div>
        <table>
          <tr>
            <td><h2 style={{color:'blue'}}>Education</h2></td>
          </tr>
          <tr>
            <h5><u>B.Sc IT Engineer</u></h5>
          </tr>
          <tr>
            <td><b>Savonia University of Applied Scinces</b></td>
          </tr>
          <tr>
            <td>Jan 2018 - On going</td>
            <td>Kuopio, Finland</td>
          </tr>
          <tr>
            <ul>
              <li>Software production, familiar with programming languages listed under</li>
              <li>Servers, databases, data communications</li>
              <li>Math</li>
            </ul>
          </tr>
          <tr>
            <button class='btn btn-primary' id="nami">Courses</button>
          </tr>
          <p></p>       
          <div id="dialog" title="Courses">        
            <img src={require('./courses1.PNG')} height='100%' width='100%'/>
            <img src={require('./courses2.PNG')} height='100%' width='100%'/>
            <img src={require('./courses3.PNG')} height='100%' width='100%'/>
            <a href="https://opintopolku.fi/koski/opinnot/a8e37e14520a42c7be613ac3db34ffae">Courses in opintopolku</a>
            <p></p>
            <button href="#" id="cancel" name="cancel">Cancel</button>
          </div>
        </table>
        <table>
          <tr>
            <h5><u>Vocational qualification in business</u></h5>
          </tr>
          <tr>
            <td><b>Savon Ammatti- ja aikuisopisto</b></td>
          </tr>
          <tr>
            <td>Aug 2007 - May 2010</td>
            <td>Kuopio, Finland</td>
          </tr>
          <tr>
            <ul>
              <li>Diploma in business administration, finance and financial management (Merkonomi in finnish)</li>
            </ul>
          </tr>
        </table>
      </div>
  ); 
}

  export default Tiedot; 