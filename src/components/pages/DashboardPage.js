import React, { Component } from 'react';
import MiddleSection from './sections/MiddleSection';
import axios from 'axios'

class DashboardPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      results: [{
        id: 1,
        created: "2019-04-25T06:20:42.405Z",
        question1: "Administration",
        question11: 0,
        question12: 1,
        question13: 0,
        question14: 1,
        question15: 1,
        question16: 0,
        question17: 1,
        question18: 0,
        question19: 1,
        question20: 0
        },
        {
          id: 2,
          created: "2019-04-25T06:20:42.405Z",
          question1: "Investments",
          question11: 0,
          question12: 1,
          question13: 0,
          question14: 1,
          question15: 1,
          question16: 0,
          question17: 1,
          question18: 0,
          question19: 1,
          question20: 0
          },
          {
            id: 3,
            created: "2019-04-25T06:20:42.405Z",
            question1: "Marketing",
            question11: 0,
            question12: 1,
            question13: 0,
            question14: 1,
            question15: 1,
            question16: 0,
            question17: 1,
            question18: 0,
            question19: 1,
            question20: 0
            },
            {
              id: 4,
              created: "2019-04-25T06:20:42.405Z",
              question1: "Operations",
              question11: 0,
              question12: 1,
              question13: 0,
              question14: 1,
              question15: 1,
              question16: 0,
              question17: 1,
              question18: 0,
              question19: 1,
              question20: 0
              },
              {
                id: 5,
                created: "2019-04-25T06:20:42.405Z",
                question1: "Sales",
                question11: 0,
                question12: 1,
                question13: 0,
                question14: 1,
                question15: 1,
                question16: 0,
                question17: 1,
                question18: 0,
                question19: 1,
                question20: 0
                }]
    }
  }
  
  async componentDidMount(){
    await axios.get('http://localhost:8080/users')
    .then(json => {
      const results = json.data;
      this.setState({results});
      console.log(results)
    })
    .catch(err => console.log(err))
  }
  render () {

  return (
    <React.Fragment>
      <MiddleSection results={this.state.results} />
    </React.Fragment>
  )
}
}


export default DashboardPage;