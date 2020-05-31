import React from 'react';
import * as S from './styles';

const Container = ({ children }) => {
    return (
        <S.Container data-test="ContainerComp">
            { children }
        </S.Container>
    );
};

export default Container;