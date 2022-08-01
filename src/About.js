import React from 'react'

function About(props) {
  return (
    <div className='about'>
        <div className='about_header'>
            <div className='about_title'>About</div>
            <div className='about_line'></div>
        </div>
        <div className='about_txt'>
            {props.user.bio===null ? "No info":props.user.bio} 
        </div>
    </div>
  )
}

export default About