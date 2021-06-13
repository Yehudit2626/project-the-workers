import {Provider} from 'react-redux'
import store from './redux/store'
import Main from './components/main'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Main></Main>
    </div>
    </Provider>
  );
}

export default App;
