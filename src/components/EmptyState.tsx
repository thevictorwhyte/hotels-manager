import { AddBox } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

interface EmptyStateProps {
  message: string;
  buttonText: string;
  onButtonClick: () => void;
}

function EmptyState({ message, buttonText, onButtonClick }: EmptyStateProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
      height="80%"
    >
      <AddBox fontSize="large" color="action" />
      <Typography variant="h6" color="textSecondary" textAlign="center">
        {message}
      </Typography>
      <Button color="primary" variant="contained" onClick={onButtonClick}>
        {buttonText}
      </Button>
    </Box>
  );
}

export default EmptyState;
