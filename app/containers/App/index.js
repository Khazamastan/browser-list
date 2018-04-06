/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import NavItem from "../../components/ListItem";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from '../App/reducer';
import saga from '../App/saga';

import { setOsVersion } from 'containers/App/actions';
import { makeSelectBrowserVersion } from 'containers/App/selectors';
import osList from "../../data/osList";
import bgMap from "../../data/bgMap";

import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';
import DeviceWrapper from 'containers/DeviceWrapper';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  height: 100%;
  padding: 0 16px; 
  background :transparent url(${ props => props.bg}) center/cover;
  transition : background 0.3s ease-in;
`;

class App extends React.Component {
  render(){
    return (
      <AppWrapper bg={("/" + bgMap[this.props.browserVersion])}>
        <Helmet
          titleTemplate="%s - Browser List"
          defaultTitle="Browser List"
        >
          <meta name="description" content="A Browser List application" />
        </Helmet>
        {/*<Header />*/}
        <DeviceWrapper />
        {/*<Footer />*/}
      </AppWrapper>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    
  };
}

const mapStateToProps = createStructuredSelector({
  browserVersion: makeSelectBrowserVersion()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect
)(App);
