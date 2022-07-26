// import React, { useState } from 'react';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}))

const HomePage = () => {
  return (
    <React.Fragment>
      <Typography variant='h6'>
        This is the TParty App for Slalom Boston's annual retreat 
      </Typography>
    </React.Fragment>
  )
}

export default HomePage;
