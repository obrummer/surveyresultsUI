import React from "react";
import fakeData from '../assets/fakeData';
import SecMiddleSection from './sections/SecMiddleSection';


class TablesPage extends React.Component {
  constructor() {
    super()
    
          }
        

  render() {

    return (
      <React.Fragment>
        <SecMiddleSection fakeData={fakeData} />
      </React.Fragment>
    );
  }
}

export default TablesPage;