import React from 'react'
import Card from './Card'
import Loading from './Loading'

function CardList(props) {
  if(props.loading){
    return <Loading/>;
  }
  return (
    <div className='con'>
        <div className='card_list'>
          {props.users.map((user)=> <Card key={user.id} user={user} getUser={props.getUser}/>) }
        </div>
    </div>
  )
  
}

export default CardList