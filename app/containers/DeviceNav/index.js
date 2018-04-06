import React from 'react';
import styled from 'styled-components';
import NavItem from "../../components/ListItem";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { setOsVersion } from 'containers/App/actions';
import { makeSelectBrowserVersion } from 'containers/App/selectors';
import osList from "../../data/osList";


const Nav = styled.ul`
  width: 200px;
  background-color: #efefef;
  border-right: 1px solid #ddd;
  margin: 0 auto;
  min-height: 100%;
  padding : 0;
`;

const osNameMapping = {
  "windows" : "Windows",
  "winxp" : "Windows XP",
  "win7" : "Windows 7",
  "win8" : "Windows 8",
  "win8_1" : "Windows 8_1",
  "win10" : "Windows 10",
  "mac" : "Mac",
  "macsl" : "OS X Snow Leopard",
  "maclion" : "OS X Lion",
  "macml" : "OS X Mountain Lion",
  "macmav" : "OS X Mavericks",
  "macyos" : "OS X Yosemite",
  "ios" : "iOS",
  "realios" : "iOS",
  "winphone" : "Windows Phone",
  "android" : "Android",
  "realdroid" : "Real Android",
  "macelc" : "OS X El Capitan",
  "macsie" : "OS X Sierra",
  "machs" : "OS X High Sierra"
};


class NavList extends React.Component {
  render(){    
    ;
    var PlatformList = Object.keys(osList).map((os) => {
      return (<NavItem 
              key={os}
              name={osNameMapping[os]}
              link={os}
              osVersion = {this.props.browserVersion}
              versionList={osList[os]} 
              allList = {osList}
              onChangeOs={this.props.setOsVersion}
              osNameMapping={osNameMapping}>
            </NavItem>);
    });

    return <Nav>{PlatformList}</Nav>;
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    setOsVersion: (os) => {
      dispatch(setOsVersion(os));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  browserVersion: makeSelectBrowserVersion()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'home', reducer });
// const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withConnect
)(NavList);
