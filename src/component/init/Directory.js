import { styled } from '@mui/material/styles';
import { useState, useRef } from 'react';
import { MESSAGE } from '../../constants/Message';
import { useTheme } from 'styled-components';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import {
  CardActionArea,
  Stack,
  TextField,
  Box,
  Grid,
  Paper,
} from '@mui/material';
// import { Margin } from '@mui/icons-material';

const Directory = ({ onDirec }) => {
  const theme = useTheme();
  const [directory, setDirectorty] = useState('');

  const focusInput = useRef();
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value.length < 1) {
        focusInput.current.focus();
        return;
      }
      onDirec(directory);
      setDirectorty('');
    }
  };

  const onChangeInput = (e) => {
    setDirectorty(e.target.value);
  };

  return (
    <>
      {/* 
    // <Stack alignItems='center'>
    //   <Card sx={{ maxWidth: 500, marginTop: '20%' }}>
    //     <CardMedia
    //       component='img'
    //       image='img/Cat.jpg'
    //       alt='Cat on Laptop'
    //       sx={{
    //         Height: 500,
    //         maxWidth: 500,
    //         objectFit: 'contain',
    //       }}
    //     />
    //     <CardContent>
    //       <Typography align='left' variant='body1'>
    //         {MESSAGE.INFORMATION}
    //       </Typography>
    //       </CardContent>
    //     </Card>
    // </Stack> */}

      <Box
        sx={{
          flexGrow: 1,
          width: 90,
          height: '90%',
        }}
      >
        <Grid container my={4} spacing={2}>
          <Grid item xs={6}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
        <StartDirectory
          ref={focusInput}
          autoFocus={true}
          placeholder='시작할 디렉토리를 적어주세요!'
          onKeyPress={handleOnKeyPress}
          onChange={onChangeInput}
          value={directory}
          color='StartDirectory'
          variant='standard'
          autoComplete='off'
          style={{ textAlign: 'center' }}
          inputProps={{ maxLength: 24, style: { textAlign: 'center' } }}
        />
      </Box>
    </>
  );
};

export default Directory;

const StartDirectory = styled(TextField)`
  type: text;
  font-size: 15px;
  text-align: center;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(15),
  textAlign: 'center',
}));
