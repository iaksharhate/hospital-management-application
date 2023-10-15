import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar'

import image1 from '../Assets/10130.jpg';
import image2 from '../Assets/10130.jpg';

export default function Appointment() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <img src={image1} alt="Image 1" />
        <Paper elevation={0} />
        <Paper />
        <Paper elevation={3} />
        <img src={image2} alt="Image 2" />
        <Paper elevation={0} />
        <Paper />
      </Box>
    </div>
  );
}
