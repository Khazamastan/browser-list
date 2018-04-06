/*
 * BrowserList
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectBrowsers, makeSelectLoading, makeSelectError, makeSelectBrowserVersion } from 'containers/App/selectors';
import BrowsersList from '../BrowserList';
import { loadBrowsers } from '../App/actions';
import reducer from '../App/reducer';
import saga from '../App/saga';
import { setOsVersion } from 'containers/App/actions';
import osList from "../../data/osList";

const Article = styled.article`
    height : 100%;
`

export class IOS extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.loadBrowserVersions();
    const defaultVersion = osList['realios'][0];
    this.props.setOsVersion(defaultVersion);
  }

  render() {
    const { loading, error, browsersList } = this.props;
    ;
    const BrowserListProps = {
      loading,
      error,
      browsersList,
    };

    if(!browsersList){
      return null;
    }

    return (
      <Article>
        <BrowsersList browserVersion={this.props.browserVersion} osVersionData={this.getOsVersionsList()}/>
      </Article>
    );
  }
  getOsVersionsList(){
    var { browsersList, browserVersion } = this.props;
    browsersList = browsersList[0];
    return browsersList[browserVersion];
  }
}

IOS.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  browsersList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loadBrowserVersions: PropTypes.func,
  setOsVersion: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    setOsVersion: (os) => {
      dispatch(setOsVersion(os));
    },
    loadBrowserVersions: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadBrowsers());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  browsersList: makeSelectBrowsers(),
  browserVersion: makeSelectBrowserVersion(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(IOS);
