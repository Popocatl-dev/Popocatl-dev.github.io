import './styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoutes from './routes/BaseRoutes';

const App = () => {
  return (
      <Router>
        <BaseRoutes />
      </Router>
  );
};

export default App;
