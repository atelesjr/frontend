import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from 'util/index';

import UserCard from 'components/UserCard';

const post = {
    avatar: "Female",
    bio: "Versatile motivating middleware",
    city: "Zhongxin",
    country: "China",
    first_name: "Ashly",
    id: 1,
    last_name: "Twycross",
    picture: "http://dummyimage.com/500x500.jpg/ff4444/ffffff",
    timestamp: "13:33",
    username: "atwycross0"
}

const setUp = ( props={ post }) => {
    const component = shallow(<UserCard {...props}/>);
    return component
}


describe('UserCard Component', () => {
    let wrapper

    beforeEach(() => {
        wrapper= setUp();
    });

    it('Should render without errors', () =>{   
        const component = findByTestAtrr(wrapper, 'UserCardComp')
        expect(component.length).toBe(1)
    });
    
    
})




