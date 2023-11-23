import { useSelector, useDispatch } from 'react-redux';
import './HideCompleted.css';

const HideCompleted = () => {
  const completed = useSelector((store) => store.todos);

  const dispatch = useDispatch();

  return (
    <div className='hideBtn'>
      <button>Hide completed</button>
    </div>
  );
};

export default HideCompleted;
