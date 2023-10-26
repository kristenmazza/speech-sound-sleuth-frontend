import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Dispatch, FC, SetStateAction } from 'react';

type NicknameFormProps = {
  setNickname: Dispatch<SetStateAction<string | null>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const NicknameForm: FC<NicknameFormProps> = ({ setNickname, handleSubmit }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <form
      noValidate
      autoComplete='off'
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      onSubmit={handleSubmit}
    >
      <FormControl sx={{ width: '25ch', marginBottom: '1.5rem' }}>
        <OutlinedInput onChange={handleChange} placeholder='Nickname' />
      </FormControl>
      <Button
        type='submit'
        variant='contained'
        sx={{
          backgroundColor: 'rgb(46, 59, 85)',
          '&:hover': { backgroundColor: 'rgb(56, 71, 101)' },
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default NicknameForm;
