import React, { Component } from 'react';
import { Link } from 'react-component-routing';
import { PageHeader } from 'react-bootstrap';
import AppContent from '../App/AppContent';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class Data extends Component {
  render() {
    return (
      <AppContent className="Data">
      <PageHeader> Sensor Values <small>Current Data</small></PageHeader>
       
        <div>
      		<ShowData/>
      	</div>
      	

      </AppContent> 

  

    );

  }
}

class ShowData extends React.Component{
  render(){
    var tableSensor = {
      width: '50%',
      marginTop: '50px',
      fontSize: '18px', 
      border: '5px solid rgb(206, 174, 132)', 
      backgroundColor: '#DCD0C0', 
      color: 'D5D5D5'
    };
    var trSensor = {
      border: '2px solid rgb(206, 174, 132)'
    };
    var thSensor = {
      border: '2px solid rgb(206, 174, 132)',
      padding: '10px'
    };
    var tdSensor = {
      padding: '10px'
    };

    //set the values here!
    var soil = 1;
    var temp = 2;
    var humid = 3;
    var water = 4;

    return(
      <div>
        <table style={tableSensor}>
        <tr style={trSensor}>
          <th style={thSensor}>Soil Moisture Sensor:</th>
          <td style={tdSensor} >{soil}</td>
        </tr>
        <tr style={trSensor}>
          <th style={thSensor}>Temperature Sensor:</th>
          <td style={tdSensor}>{temp}</td>
        </tr>
        <tr style={trSensor}>
          <th style={thSensor}>Humidity Sensor:</th>
          <td style={tdSensor}>{humid}</td>
        </tr>
        <tr style={trSensor}>
          <th style={thSensor}>Water Sensor:</th>
          <td style={tdSensor}>{water}</td>
        </tr>
      </table>
      
      
      </div>
      
    );
  }
}

class Table extends React.Component {

	render() {

 const data = [{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    }
  }, {
  name: 'AAA',
  age: 22,
  friend: {
    name: 'Jason',
    age: 55,
  }
  }]

  const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> 
  }, {
    id: 'friendName', 
    Header: 'Friend Name',
    accessor: d => d.friend.name 
  }, {
    Header: props => <span>Friend Age</span>, 
    accessor: 'friend.age'

  }]

  
    return(
    	<ReactTable className="-striped -highlight"
		    data={data}
        columns={columns}
        defaultPageSize= '10'
		/>
    );

 }
}



export default Data;
