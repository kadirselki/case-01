import 'src/scss/main.scss';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { Provider } from 'react-redux';
import { store } from './store';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/apollo-instance';
import { Fragment } from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Fragment>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>
    </Fragment>,
);
