import { Provider } from 'react-redux';
import './css/styles.css';
import AppRouter from './routers/AppRouter';
import { store } from './store/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
