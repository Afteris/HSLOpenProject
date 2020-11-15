import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Traveller } from './components/Traveller';
import { RecoilRoot } from 'recoil';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <RecoilRoot>
                <Layout>
                    <Route exact path='/traveller' component={Home} />
                    <Route path='/' component={Traveller} />
                </Layout>
            </RecoilRoot>
        );
    }
}
