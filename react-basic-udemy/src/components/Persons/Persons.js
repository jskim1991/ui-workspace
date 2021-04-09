import React, { PureComponent } from 'react';
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

class Persons extends PureComponent {

      // static getDerivedStateFromProps(props, state) {
      //       console.log('[Persons.js] getDerivedStateFromProps')
      //       return state;
      // }

      // componentWillReceiveProps(props) {
      //       console.log('[Persons.js] componentWillReceiveProps', props);
      // }

      // this can be removed using PureComponent. It achieves the same as the implementation below.
      // shouldComponentUpdate(nextProps, nextState) {
      //       console.log('[Persons.js] shouldComponentUpdated');
      //       if (nextProps.persons !== this.props.persons ||
      //             nextProps.changed !== this.props.changed ||
      //             nextProps.clicked !== this.props.clicked
      //             ) {
      //             return true;
      //       } else {
      //             return false;
      //       }
      //       return true;
      // }

      // getSnapshotBeforeUpdate(prevProps, prevState) {
      //       console.log('[Persons.js] getSnapshotBeforeUpdate');
      //       return {message: 'Snapshot!'};
      // }

      // componentWillUpdate()

      componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('[Persons.js] componentDidUpdate');
            console.log(snapshot);
      }

      render() {
            console.log('[Persons.js] rendering...');
            return (
            this.props.persons.map( ( person, index ) => {
              return (<Person
                  key={person.id}
                  click={() => this.props.clicked( index )}
                  name={person.name}
                  age={person.age}
                  changed={( event ) => this.props.changed( event, person.id )} 
              />);
            } ))
      }

      
};

export default Persons;