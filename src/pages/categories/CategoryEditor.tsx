import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Box, Button, Modal, TextField } from '@mui/material';
import useCategories from '../../hooks/categories/useCategories';

interface IProps {
  open: boolean;
  handleClose: () => void;
}

const CategoryEditor = ({ open, handleClose }: IProps) => {
  const [categoryName, setCategoryName] = useState('');
  const { addNewCategory } = useCategories();

  const handleCategoryNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategoryName(event.target.value);
  };

  const handleSave = () => {
    // onSave(hotelName, hotelAddress, hotelCategory);
    addNewCategory({
      name: categoryName,
      id: uuidv4(),
    });
    handleClose();
    setCategoryName('');
  };
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
          <Button variant="outlined" color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

export default CategoryEditor;