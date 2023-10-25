import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function NicknameForm() {
  return (
    <form noValidate autoComplete='off'>
      <FormControl sx={{ width: '25ch', marginBottom: '1.5rem' }}>
        <OutlinedInput placeholder='Nickname' />
      </FormControl>
    </form>
  );
}
