import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './stores/index'
window.store = store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);