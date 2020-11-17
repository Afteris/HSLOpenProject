import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Traveller } from './components/Traveller';
import { RecoilRoot } from 'recoil';
import { ApolloProvider, ApolloClient, InMemoryCache  } from '@apollo/client';

import './custom.css'

const client = new ApolloClient({
    uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
    cache: new InMemoryCache()
});

export default class App extends Component {
    static displayName = App.name;
    
    render() {
        return (
            <RecoilRoot>
                <ApolloProvider client={client}>
                    <Layout>
                        <Route path='/' component={Traveller} />
                        <Route exact path='/test' component={Home} />           
                    </Layout>
                </ApolloProvider>
            </RecoilRoot>
        );
    }
}
