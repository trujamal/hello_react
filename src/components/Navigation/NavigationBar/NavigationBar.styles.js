import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Layout, Col } from 'antd';

export const NavigationBarWrapper = styled(Layout)`
 display: flex;
 color: white;
 float: none;
 z-index: 100;
 background: linear-gradient(90deg, #d53369 0%, #daae51 100%);

 .ant-layout-header{
    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
    height: 64px;
}

`;

export const NavigationBarHeader = styled(Col)`
    text-align: center;
`;

export const NavigationBarIcons = styled(Col)`
    text-align: right;
`;


export const NavigationBarLinks = styled(Col)`
`;

export const NavigationRouter = styled(Link)`
    color: white;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
    -webkit-text-decoration-skip: objects;
    margin: 0 1vw;
    font-size: 1.5em;

    &:hover {
        color: black;
    }

`;


