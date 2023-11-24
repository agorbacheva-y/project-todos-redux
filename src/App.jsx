import { Provider } from 'react-redux';
import Form from './components/pages/Form';
import List from './components/pages/List';
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
