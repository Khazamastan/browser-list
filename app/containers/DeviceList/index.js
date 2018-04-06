import React from 'react';
import styled from 'styled-components';
import List from '../../components/ListDiv';

export default function ListItem(props) {
    return <List>{props.children}</List>;
}