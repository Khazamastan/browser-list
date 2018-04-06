import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import getPath from '../../utils/getPath';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeSelectBrowserVersion } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';


import DeviceNav from "../DeviceNav";
import DeviceList from "../DeviceList";
import Android from 'containers/Android/Loadable';
import IOS from 'containers/IOS/Loadable';
import Windows from 'containers/Windows/Loadable';
import Mac from 'containers/Mac/Loadable';


const DeviceContainer = styled.div`
  margin: 0 auto;
  display: flex;
  border: 1px solid #ddd;
  border-radius : 3px;
  overflow : hidden;
  margin-top : 10%;
  height : 500px;
`;

  
const DeviceWrapper = () => {
        return (
            <DeviceContainer>
                <DeviceNav />
                <DeviceList>
                    <Switch>
                        <Route exact path="/windows" component={Windows} />
                        <Route exact path="/" component={Windows} />
                        <Route path="/mac" component={Mac} />
                        <Route path="/realios" component={IOS} />
                        <Route path="/realdroid" component={Android} />
                    </Switch>
                </DeviceList>
            </DeviceContainer>
        )
};

export default DeviceWrapper;