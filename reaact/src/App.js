import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css"
//import myData from './FILE.json';

class App extends Component {

  constructor(props){
	super(props);

	this.state={
		posts:[]
	}

  }
  render() { 
	const columns=[
		{
			Header:"Nom Hotel",
			accessor:"hotelName"
		},
		{
			Header :"Prix",
			accessor:"hotelPrice"
		},
		{
			Header:"liens",
			accessor:"LinkforReservation"
		}
	]


    return (

	

<ReactTable columns={columns}
	data={myData}>
</ReactTable>

    );
  }
}

export default App;
