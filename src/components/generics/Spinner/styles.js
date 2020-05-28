import styled from 'styled-components';
import { spin } from 'styles/theme';

export const Spinner = styled.div`
    font-size: 10px;
    margin: 50px auto;
    text-indent: -9999em;
    width: ${ props => props.size ? props.size : '10rem' };
    height: ${ props => props.size ? props.size : '10rem' };
    border-radius: 50%;
    background: #264d59;
    background: -moz-linear-gradient(left, #264d59 10%, rgba(38,77,89, 0) 42%);
    background: -webkit-linear-gradient(left, #264d59 10%, rgba(38,77,89, 0) 42%);
    background: -o-linear-gradient(left, #264d59 10%, rgba(38,77,89, 0) 42%);
    background: -ms-linear-gradient(left, #264d59 10%, rgba(38,77,89, 0) 42%);
    background: linear-gradient(to right, #264d59 10%, rgba(38,77,89, 0) 42%);
    position: relative;
    -webkit-animation: ${ spin } 1.4s infinite linear;
    animation: ${ spin } 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);

    &:before {
        width: 50%;
        height: 50%;
        background: #264d59;
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
    }

    &:after {
        background: #e4e4e4;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`
