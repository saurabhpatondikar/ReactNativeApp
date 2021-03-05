/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {Provider} from 'react-redux'
import SimpleButton from '../src/Component/Buttons/ButtonsNormal'
import HeadingLeft from '../src/Component/HeadingComp/HeadingLeft'
import About from '../src/Screens/AboutScreen'
import Home from '../src/Screens/HomeScreen'
import Last from '../src/Screens/LastScreen'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
let mockStore=configureStore([thunk])
it('renders correctly', () => {
 const tree=renderer.create(<App/>).toJSON();
 expect(tree).toMatchSnapshot()
});

it('renders correctly Simple Button', () => {
    const tree=renderer.create(<SimpleButton/>).toJSON();
    expect(tree).toMatchSnapshot()
});
it('renders correctly Header', () => {
    const tree=renderer.create(<HeadingLeft/>).toJSON();
    expect(tree).toMatchSnapshot()
});

describe('renders correctly About Screen', () => {
    let store;
    let wrapper;
    beforeEach(()=>{
        store = mockStore({
            myState: 'sample text',})
        wrapper = renderer.create(
                <Provider store={store}>
                    <About/>
                </Provider>
                );    
    })
    it('should render with given state from Redux store ',()=>{
        expect(wrapper.toJSON()).toMatchSnapshot()
     })   
    
});
describe('renders correctly Home Screen', () => {
    let store;
    let wrapper;
    beforeEach(()=>{
        store = mockStore({
            myState: 'sample text',})
         wrapper = renderer.create(
                <Provider store={store}>
                    <Home/>
                </Provider>
                );
    })
        
   it('should render with given state from Redux store ',()=>{
    expect(wrapper.toJSON()).toMatchSnapshot()
   })
   
});
describe('renders correctly Last Screen', () => {
    let store;
    let wrapper
    beforeEach(()=>{
        store = mockStore({
            myState: 'sample text',})

            wrapper = renderer.create(
                <Provider store={store}>
                    <Last/>
                </Provider>
                );
    })
    it('should render with given state from Redux store',()=>{
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
    
});
