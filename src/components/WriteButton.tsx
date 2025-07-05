import { useNavigate } from 'react-router-dom';
import { Fab, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function WriteButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/posts/write');
  };

  return (
    <Tooltip title="Write" placement="left">
      <Fab
        color="primary"
        aria-label="write"
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
        }}
      >
        <EditIcon />
      </Fab>
    </Tooltip>
  );
}
