import 'src/scss/main.scss';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { Provider } from 'react-redux';
import { store } from './store';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
);
