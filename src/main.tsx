import 'src/scss/main.scss';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { Provider } from 'react-redux';
import { store } from './store';
import { StrictMode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/apollo-instance';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>
    </StrictMode>,
);
