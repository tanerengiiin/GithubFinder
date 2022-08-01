import React from 'react'
import './App.css';

function checkNum(num){
  if(num <1000){
    return num;
  }else if(num >=1000 && num <1000000){
    let n=(parseInt(((num*1.0)/1000)*10)*1.0)/10;
    
    if(Number.isInteger(n)){
      return n.toFixed(0)+"K";
    }else{
      return n.toFixed(1)+"K";
    }
  }else{
    let n=(parseInt(((num*1.0)/1000000)*10)*1.0)/10;
    if(Number.isInteger(n)){
      return n.toFixed(0)+"M";
    }else{
      return n.toFixed(1)+"M";
    }
  }
}

function UserCard(props) {
  return (
    <div className='user_card'>
        <div className='user_img'>
            <img src={props.user.avatar_url} alt=""/>
            <div className='hireable' style={{display:props.user.hireable===null ? "none":"block"}}>HIRE</div>
        </div>
        <div className='user_country'>{props.user.location === null ? "No Location":props.user.location }</div>
        <div className='user_name'>{props.user.name === null ? props.user.login:props.user.name }</div>
        <div className='about_links'>
                <a  href={'https://twitter.com/'+props.user.twitter_username} className='link' style={{display:props.user.twitter_username===null ? "none":"flex"}}>
                    <div className='link_icon'>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                </a>
                <a href={props.user.html_url!== null ? props.user.html_url : "#"} className='link'>
                    <div className='link_icon'>
                    <i class="fa-brands fa-github"></i>
                    </div>
                </a>
                <a href={props.user.email!==null ? "mailto:"+props.user.email : "#"} className='link' style={{display:props.user.email===null ? "none":"flex"}}>
                    <div className='link_icon'>
                    <i class="fa-solid fa-envelope"></i>
                    </div>
                </a>
                <a href={props.user.blog!==null ? props.user.blog : "#"} className='link' style={{display:props.user.blog===null ? "none":"flex"}}>
                    <div className='link_icon'>
                    <i class="fa-solid fa-link"></i>
                    </div>
                </a>
        </div>
        <div className='user_det'>
            <div className='user_d'>
                <div className='d_text'>{checkNum(props.user.followers)}</div>
                <div className='d_title'>Followers</div>
            </div>
            <div className='user_d'>
                <div className='d_text'>{checkNum(props.user.public_repos)}</div>
                <div className='d_title'>Repos</div>
            </div>
        </div>
    </div>
  )
}

export default UserCard