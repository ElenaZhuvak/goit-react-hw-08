import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
// import { Provider } from 'react-redux';
// import { store } from './redux/store.js';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
        <App />
        <Toaster position="top-center" reverseOrder={false} />
      {/* </Provider> */}
    </BrowserRouter>
  </StrictMode>
);
