import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { ThemeProvider } from './hooks/themeHook/themeContext';
import { LocalProvider } from './hooks/localHook/localContext';

const Root = () => {
  return (
    <ThemeProvider>
      <LocalProvider>
      <App />
      </LocalProvider>
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<Root />);

reportWebVitals();
serviceWorkerRegistration.register();
