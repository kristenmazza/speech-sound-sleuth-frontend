import Checkbox from '@mui/material/Checkbox';
import StarBorder from '@mui/icons-material/StarBorder';
import Star from '@mui/icons-material/Star';
import { Box } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox' } };

export default function PracticeCheckboxes() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
      <Checkbox
        disableRipple
        sx={{
          transform: 'scale(2)',
          padding: 0,
          '&.Mui-checked': {
            color: 'rgb(2, 140, 135)',
          },
        }}
        {...label}
        icon={<StarBorder />}
        checkedIcon={<Star />}
      />
      <Checkbox
        disableRipple
        sx={{
          transform: 'scale(2)',
          padding: 0,
          '&.Mui-checked': {
            color: 'rgb(2, 140, 135)',
          },
        }}
        {...label}
        icon={<StarBorder />}
        checkedIcon={<Star />}
      />
      <Checkbox
        disableRipple
        sx={{
          transform: 'scale(2)',
          padding: 0,
          '&.Mui-checked': {
            color: 'rgb(2, 140, 135)',
          },
        }}
        {...label}
        icon={<StarBorder />}
        checkedIcon={<Star />}
      />
      <Checkbox
        disableRipple
        sx={{
          transform: 'scale(2)',
          padding: 0,
          '&.Mui-checked': {
            color: 'rgb(2, 140, 135)',
          },
        }}
        {...label}
        icon={<StarBorder />}
        checkedIcon={<Star />}
      />
      <Checkbox
        disableRipple
        sx={{
          transform: 'scale(2)',
          padding: 0,
          '&.Mui-checked': {
            color: 'rgb(2, 140, 135)',
          },
        }}
        {...label}
        icon={<StarBorder />}
        checkedIcon={<Star />}
      />
    </Box>
  );
}
