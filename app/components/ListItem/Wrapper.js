import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  position: relative;
  list-style : none;
  border-top: 1px solid #eee;
  &:first-child {
    border-top: none;
  }
  &.main-active{
    >div > a{
      background : #009cfc;
      color : #fff;
      &:hover{
        background-color: #009cfc;
      }
    }
  }
  .link-item{
    display : inline-block;
    width : 100%;
    height : 100%;
    &:hover{
      background-color: #e1e1e1;
    }
  }
  &.active{
    ul{
      display : block;
      li {
        &.active{
          a{
            color : #fff;
            background : #009cfc;
          }
        }
      }
    }  
  }
  ul{
    display : none;
  }
`;

export default Wrapper;
