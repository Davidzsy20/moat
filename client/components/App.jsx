import React from 'react';
import GMAP from './GMAP.jsx';
import Location from './Location.jsx';
// import Starting from './Starting.jsx'
export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <Location/>
       
        <GMAP/>
      </div>
      );
  }
}