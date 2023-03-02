import { useState } from 'react';
import {
  Box,
  Stack,
  Grid,
  Button,
  Card,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import useCategories from '../../hooks/categories/useCategories';
import CategoryEditor from './CategoryEditor';
import EmptyState from '../../components/EmptyState';

const Categories = () => {
  const [modal, setModal] = useState({
    data: null,
    open: false,
  });
  const { categories } = useCategories();
  return (
    <Box p={4} sx={{ flexGrow: 1, maxWidth: 1000 }}>
      {!categories.length ? (
        <EmptyState
          message="You have not created any category"
          buttonText="Create Category"
          onButtonClick={() => {
            setModal({ data: null, open: true });
          }}
        />
      ) : (
        <Stack direction="column" spacing={2} width="100%">
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
                <Grid key={category.id} md={6} item>
                  <Card elevation={2}>
                    <CardHeader
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={
                        <Typography variant="h6">{category.name}</Typography>
                      }
                    />
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      )}

      <CategoryEditor
        open={modal.open}
        handleClose={() =>
          setModal({
            data: null,
            open: false,
          })
        }
      />
    </Box>
  );
};

export default Categories;
