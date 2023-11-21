import { Provider } from 'react-redux';
import Form from './components/Form';
import List from './components/List';
import { store } from './store';

const App = () => {
  return (
    <div>
      <Provider store={store} >
        <Form />
        <List />
      </Provider>
    </div>
  )
}

export default App;
