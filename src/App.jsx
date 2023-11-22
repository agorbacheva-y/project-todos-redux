import { Provider } from 'react-redux';
import Form from './components/Form';
import List from './components/List';
import HideCompleted from './components/HideCompleted';
import { store } from './store';

const App = () => {
  return (
    <div>
      <Provider store={store} >
        <Form />
        <HideCompleted />
        <List />
      </Provider>
    </div>
  )
}

export default App;
