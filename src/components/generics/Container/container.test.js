
import React from 'react';
import { shallow } from 'enzyme';
import Container from './index'
import { findByTestAtrr } from 'util/index';


const setUp = () => {
    const component = shallow(<Container />);
    return component
}

describe('Spinner Component', () => { 
    let wrapper

    beforeEach(() => {
        wrapper= setUp();
    });

    it('Shoudl render without errors', () =>{
        const component = findByTestAtrr(wrapper, 'ContainerComp')
        expect(component.length).toBe(1)
    })    


})