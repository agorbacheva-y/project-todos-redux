import { useSelector } from 'react-redux';
import './HideCompleted.css';

const HideCompleted = () => {
  const todos = useSelector((store) => store.todos);

  const handleClick = () => {
    
  }

  return (
    <div className='hideBtn'>
      <button onClick={handleClick}>Hide completed</button>
    </div>
  );
};

export default HideCompleted;
