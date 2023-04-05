import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const { message } = useSelector((store) => store.categorie);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories">
      <button onClick={handleClick} type="button">
        Check Status
      </button>
      <h1>{message}</h1>
    </div>
  );
};

export default Categories;
