import React, { Component } from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
export default class Header extends Component {
  render() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header-icon'/>
            </IconButton>
            <img
                src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png'
                className='header-logo'
            alt=""/>
            <IconButton>
                <QuestionAnswerIcon fontSize='large'  className='header-icon'/>
            </IconButton>
        
      </div>
    )
  }
}
