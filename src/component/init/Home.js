import * as React from 'react';
import Typography from './Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { useTheme } from '@mui/material/styles';

const backgroundImage = 'img/Cat.jpg';
// 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

export default function ProductHero() {
  const theme = useTheme();
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt='increase priority'
      />
      <Typography
        color='StartDirectory.contrastText'
        align='center'
        variant='h2'
        marked='center'
        sx={{ zIndex: 3 }}
      >
        My Own Directory Tree
      </Typography>
      <Typography
        color='#ecbe30'
        align='center'
        variant='h4'
        sx={{ mb: 4, mt: { xs: 4, sm: 10 }, zIndex: 3 }}
      >
        Learn commands related to directory and file control!
      </Typography>
      <Typography
        color='StartDirectory.contrastText'
        variant='h6'
        sx={{ mt: 2, zIndex: 3 }}
      >
        we have ( mkdir, cd, rm, touch, cp, mv ) enjoy it :)
      </Typography>
    </ProductHeroLayout>
  );
}
