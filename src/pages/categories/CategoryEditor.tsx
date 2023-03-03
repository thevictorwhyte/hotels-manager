import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { style } from '../hotels/HotelEditor';
import { Box, Button, Modal, TextField } from '@mui/material';
import useCategories from '../../hooks/categories/useCategories';
import { ICategory } from '../../redux/categories/typings';

interface IProps {
  open: boolean;
  handleClose: () => void;
  data: null | ICategory;
}

const CategoryEditor = ({ open, handleClose, data }: IProps) => {
  const [categoryName, setCategoryName] = useState('');
  const { addNewCategory, editExistingCategory } = useCategories();

  const handleCategoryNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategoryName(event.target.value);
  };

  const handleSave = () => {
    if (data) {
      editExistingCategory({
        name: categoryName,
        id: data.id,
      });
    } else {
      addNewCategory({
        name: categoryName,
        id: uuidv4(),
      });
    }
    handleClose();
    setCategoryName('');
  };

  const closeModal = () => {
    setCategoryName('');
    handleClose();
  };

  useEffect(() => {
    if (data) {
      setCategoryName(data.name);
    }
  }, [data]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <TextField
          id="category-name"
          label="Category Name"
          sx={{ width: '100%' }}
          value={categoryName}
          onChange={handleCategoryNameChange}
        />
        <br />
        <Box
          display="flex"
          justifyContent="end"
          gap={2}
          alignItems="end"
          width="100%"
        >
          <Button variant="outlined" color="primary" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={!categoryName}
            color="primary"
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CategoryEditor;
