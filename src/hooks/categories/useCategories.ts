import { useSelector, useDispatch } from 'react-redux';
import {
  addCategory,
  deleteCategory,
  editCategory,
} from '../../redux/categories/reducer';
import { selectCatgories } from '../../redux/categories/selectors';
import { ICategory } from '../../redux/categories/typings';

const useCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCatgories);

  const addNewCategory = (category: ICategory) => {
    dispatch(addCategory(category));
  };

  const editExistingCategory = (category: ICategory) => {
    dispatch(editCategory(category));
  };

  const deleteExistingCategory = (category: ICategory) => {
    dispatch(deleteCategory(category));
  };

  return {
    categories,
    addNewCategory,
    editExistingCategory,
    deleteExistingCategory,
  };
};

export default useCategories;
