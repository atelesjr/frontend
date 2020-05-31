import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './index'
import { findByTestAtrr } from 'util/index';

const setUp = (props={}) => {
    const component = shallow(<Spinner {...props}/>);
    return component
}

describe('Spinner Component', () => { 
    let wrapper

    beforeEach(() => {
        wrapper= setUp();
    });

    it('Shoudl render without errors', () =>{
        const component = findByTestAtrr(wrapper, 'SpinnerComp')
        expect(component.length).toBe(1)
    })    


})