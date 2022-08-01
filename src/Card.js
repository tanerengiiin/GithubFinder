
import React from 'react'
import { Link } from "react-router-dom";

function Card(props) {
  
  return (
    <div className='card'>
        <div className='card_img'>
            <img src={props.user.avatar_url} alt="doesn't exist"/>
        </div>
        <div className='card_title'>
            {props.user.login}
        </div>
        {/* <div className='card_loc'>
        <i class="fa-solid fa-location-dot"></i>Turkey
        </div>
        <div className='card_detail'>
            <div className='card_followers'>
              <div className='card_fol'>{checkNum(parseInt(55021))}</div>
              <div className='card_fol_txt'>Followers</div>
            </div>
            <div className='card_repos'>
              <div className='card_rep'>220</div>
              <div className='card_rep_txt'>Repos</div>
            </div>
        </div> */}
        <Link to={`/GithubFinder/users/${props.user.login}`} style={{textDecoration:"none"}}>
          <div className='card_det_btn' onClick={()=>props.getUser(props.user.login)}>
            Detail
          </div>
        </Link>
    </div>
  )
}

export default Card