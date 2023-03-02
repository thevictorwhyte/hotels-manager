import { useSelector, useDispatch } from 'react-redux';
import { addCategory } from '../../redux/categories/reducer';
import { selectCatgories } from '../../redux/categories/selectors';
import { ICategory } from '../../redux/categories/typings';

const useCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCatgories);

  const addNewCategory = (category: ICategory) => {
    dispatch(addCategory(category));
  };

  return {
    categories,
    addNewCategory,
  };
};

export default useCategories;
