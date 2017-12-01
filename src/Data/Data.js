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
      <PageHeader> Sensor Values <small>Collected Data</small></PageHeader>
       
        <div>
      		<Table/>
      	</div>
      	

      </AppContent> 

  

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
