import React from 'react';
import { connect } from 'react-redux'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import App from '../components/app/App.jsx'

const SUBJECT = gql`
  query loadtam {
    tam {
    name
  }
  }
`;
const mapDataToProps = graphql(
  SUBJECT,
  {
    options: () => ({  pollInterval: 1000 })
  }
);

const renderMap = mapDataToProps(App);
export default renderMap
