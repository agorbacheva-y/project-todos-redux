import { useSelector, useDispatch } from 'react-redux';
import { hide } from '../reducers/hideSlice';
import './HideCompleted.css';

const HideCompleted = () => {
  const hide = useSelector((store) => store.hide);
  const dispatch = useDispatch();

  return (
    <div className='hideBtn'>
      <button>Hide completed</button>
    </div>
  );
};

export default HideCompleted;
