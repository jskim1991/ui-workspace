import React, { Component } from 'react';

import {Box, Container} from '@material-ui/core';
import EmployeeListView from './views/EmployeeListView';
import EmployeeListContainer from './containers/EmployeeListContainer';

class App extends Component {
  render(){
    return (
      <Container >
        <Box m={3}><EmployeeListContainer /></Box>
        <Box m={3}>
          
        </Box>
      </Container>
  );
  }
}

export default App;
