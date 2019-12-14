import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getPerson } from '../actions/index';
import Button from '@material-ui/core/button'

import PersonCreator from './PersonCreator'
const Person = props => {
  return (
    <div>
      {props.person && <h1>Here's Your Lover</h1>}
      {!props.person && !props.isFetching && <p>Hey Kiddo, Wanna See Your Lover?</p>}
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.person && !props.isFetching && <PersonCreator person={props.person.results[0]}/>}
      <Button onClick={props.getPerson}>SEE THEM!</Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getPerson }
)(Person);
