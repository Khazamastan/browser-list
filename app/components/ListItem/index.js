import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Item from './Item';
import Wrapper from './Wrapper';
import getPath from '../../utils/getPath';


const A = styled(Link)`
  text-decoration : none;
  color: #000;
  display : block;
  padding-left: 16px;
  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`;


const SubList = styled.ul`
  width: 200px;
  background-color: #efefef;
  border-right: 1px solid #ddd;
  margin: 0 auto;
  min-height: 100%;
  padding : 0;
  li{
    a{
      padding-left: 32px;
    }
  }
`;

function ListItem(props) {
  const onChangeOs = function(os){
    props.onChangeOs(os)
  };

  const SubListContent = Array.isArray(props.versionList) && props.versionList.map((version) => {
        return (<Wrapper 
                  key={version} 
                  className={((version == props.osVersion) ? "active" : "")}
                >
                  <Item>
                    <a className="link-item" onClick={onChangeOs.bind(this,version)}>{props.osNameMapping[version]}</a>
                  </Item>
              </Wrapper>);
    });
  
  var activeClass = ((getPath.getCurrentPath() == props.link) ? "active" : "");
  const hasMulti = (props.allList[props.link].length > 1); 
  activeClass = (activeClass && !hasMulti) ? "main-active" : activeClass;
  return (
    <Wrapper className={activeClass}>
      <Item>
        <A 
          className="link-item"
          onClick={props.onChangeOs.bind(this, props.allList[props.link][0])} 
          to={"/"+props.link}>{props.name}
        </A>
      </Item>
      { hasMulti ? 
          <SubList>{SubListContent}</SubList> 
          : 
          null
      }
    </Wrapper>
  );
}

ListItem.propTypes = {
  link: PropTypes.any,
};

export default ListItem;