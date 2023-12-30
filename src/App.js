
import './App.css';


//COMPONENTS
import Header from './components/Header';
import Main from './components/Main';

//REDUX
import {Provider} from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
