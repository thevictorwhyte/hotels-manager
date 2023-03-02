import { useState } from 'react';
import {
  Box,
  Grid,
  Button,
  Card,
  CardHeader,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import useCategories from '../../hooks/categories/useCategories';
import CategoryEditor from './CategoryEditor';
import EmptyState from '../../components/EmptyState';
import { ICategory } from '../../redux/categories/typings';

const Categories = () => {
  const [modal, setModal] = useState<{
    open: boolean;
    data: ICategory | null;
  }>({
    data: null,
    open: false,
  });
  const { categories, deleteExistingCategory } = useCategories();

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 1000, padding: { xs: 2, md: 4 } }}>
      {!categories.length ? (
        <EmptyState
          message="You have not created any category"
          buttonText="Create Category"
          onButtonClick={() => {
            setModal({ data: null, open: true });
          }}
        />
      ) : (
        <Grid container spacing={2}>
          <Grid item md={12}>
            {' '}
            <Button
              variant="contained"
              onClick={() => setModal({ data: null, open: true })}
            >
              Add New Category
            </Button>
          </Grid>
          {categories.map((category) => {
            return (
              <Category
                key={category.id}
                category={category}
                onMenuItemClick={() => setModal({ data: category, open: true })}
                deleteExistingCategory={deleteExistingCategory}
              />
            );
          })}
        </Grid>
      )}

      <CategoryEditor
        open={modal.open}
        handleClose={() =>
          setModal({
            data: null,
            open: false,
          })
        }
        data={modal.data}
      />
    </Box>
  );
};

interface ICategoryProps {
  category: ICategory;
  onMenuItemClick: () => void;
  deleteExistingCategory: (x: ICategory) => void;
}

const Category = ({
  category,
  onMenuItemClick,
  deleteExistingCategory,
}: ICategoryProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickVertIcon = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid xs={12} lg={6} item>
      <Card elevation={2}>
        <CardHeader
          action={
            <div>
              <IconButton aria-label="settings" onClick={handleClickVertIcon}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                open={open}
                key={category.id}
                id={`cateogries-menu-${category.id}`}
                onClose={handleClose}
                anchorEl={anchorEl}
              >
                <MenuItem
                  onClick={() => {
                    onMenuItemClick();
                    handleClose();
                  }}
                >
                  Edit Category
                </MenuItem>
                <MenuItem onClick={() => deleteExistingCategory(category)}>
                  Delete Category
                </MenuItem>
              </Menu>
            </div>
          }
          title={<Typography variant="h6">{category.name}</Typography>}
        />
      </Card>
    </Grid>
  );
};

export default Categories;


