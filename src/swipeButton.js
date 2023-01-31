import React from 'react';
import "./swipeButton.css";
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FlashOnIcon from '@mui/icons-material/FlashOn';
function swipeButton() {
  return (
      <div className='swipeButton'>
          <IconButton  className='swipeButton-repeat'>
              <ReplayIcon fontSize='large' className=''/>
          </IconButton>
          <IconButton className='swipeButton-left'>
              <CloseIcon fontSize='large'/>
          </IconButton>
          <IconButton className='swipeButton-star'>
              <StarIcon fontSize='large'/>
          </IconButton>
          <IconButton className='swipeButton-right'>
              <FavoriteIcon fontSize='large'/>
          </IconButton>
          <IconButton className='swipeButton-lightning'>
              <FlashOnIcon fontSize='large'/>
          </IconButton>
    </div>
  )
}

export default swipeButton