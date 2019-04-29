import React, { Component } from 'react';
import TableSection from './sections/TableSection';
import ChartSection2 from './sections/ChartSection2';
import axios from 'axios'

class DashboardPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      results: []
    }
  }
  
  async componentDidMount(){
    await axios.get('http://localhost:8080/users')
    .then(json => {
      const results = json.data;
      this.setState({results});
    })
  }

  render () {
  return (
    <React.Fragment>
      <ChartSection2 />
      <TableSection results={this.state.results}/>
    </React.Fragment>
  )
}
}


export default DashboardPage;