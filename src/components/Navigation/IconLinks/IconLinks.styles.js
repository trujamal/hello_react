import styled from 'styled-components';
import {Row} from 'antd';

export const IconRouter = styled.a`
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

export const IconLinksWrapper = styled(Row)`

`;
