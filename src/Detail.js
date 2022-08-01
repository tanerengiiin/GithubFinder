import React, { useState ,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import About from './About'
import Loading from './Loading';
import Prog from './Prog';
import Repo from './Repo'
import UserCard from './UserCard'

function Detail(props) {
  let {login}=useParams();
  console.log(login);
  useEffect(()=>{
  
    props.getUser(login);
  },[])
  props.userStats.sort((a,b)=> (a.point<b.point?1:-1));
  let written=[];
    let total=0;
    for(let i=0; i<props.userStats.length; i++){
      total+=props.userStats[i].point;
  }
    for(let i=0; i<props.userStats.length ; i++){
      if(props.userStats[i].name!==null){
        written.push(props.userStats[i]);
      }else{
        written.push({"name":"Others","point":props.userStats[i].point});
      }
        
    }

    if(props.loading){
      return <Loading/>
    }
  return (
    
    <div className='con'>
      <div className='detail'>
        <div className='left_det'>
          <UserCard user={props.user}/>
          <div className='left_det_stat'>
            <div className='l_d_s_title'>Technologies</div>
            {written.map((prog)=>  <Prog progName={prog.name} progStat={((Math.floor((prog.point/total)*100)).toFixed(0))}/>)}
            
          </div>
        </div>
        <div className='right_det'>
          <About user={props.user}/>
          {props.repo.map((repo)=><Repo key={repo.id} repo={repo}/>)}
          
        </div>
      </div>
      
    </div>
  )
}

export default Detail