import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

export const NavigationLinksWrapper = styled(Row)`


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

    .navigation_link{
        color: aliceblue;
    }

`;