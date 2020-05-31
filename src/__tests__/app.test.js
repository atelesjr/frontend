import React from 'react';
import { mount } from 'enzyme';

//redux
import { Provider } from 'react-redux';
import { store } from '../redux'

//components
import App from '../App/';
import Spinner from 'components/generics/Spinner'
import Container from 'components/generics/Container';
import UserCard from 'components/UserCard';

const fakeData =[
    {
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
    },{
        avatar: "Female",
        bio: "Visionary scalable capability",
        city: "Binlod",
        country: "Philippines",
        first_name: "Vevay",
        id: 2,
        last_name: "Berzins",
        picture: "http://dummyimage.com/500x500.jpg/ff4444/ffffff",
        timestamp: "4:04",
        username: "vberzins1",
    }
]

describe('App Component with no data', () => { 
    let component
    beforeEach(() => {
        component = mount(
            <Provider store={store}>
                <App   />
            </Provider>
        );
    });
    
    afterEach (() => {
        component.unmount();
    });


    it('Container component should render', () =>{
        expect(component.find(Container).length).toEqual(1);
    });

    it('Spinner component should render', () =>{
        expect(component.find(Spinner).length).toEqual(1);
    });
    
    it('UserCard commponent should not render', () => {
        expect(component.find(UserCard).length).toEqual(0);
    });
});


describe('App component with data', () => {
    let component
    beforeEach(() => {
        component = mount(
            <Provider store={ store }>
                <App posts={ fakeData } />
            </Provider>
        );
    });
    
    afterEach (() => {
        component.unmount();
    });

    it('Container component should render', () =>{
        expect(component.find(Container).length).toEqual(1);
    });

    it('Spinner component should not render', () =>{
        expect(component.find(Spinner).length).toEqual(0);
    });

    it('UserCard componnet should render twice', () => {
       expect(component.find(UserCard).length).toEqual(2);
    })
    
})




