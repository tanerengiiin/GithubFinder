import React from 'react'

function Error(props) {
    if(props.msg!==""){
        return (
            <div className='con'>
                <div className='error'>
                    <i className="fa-solid fa-circle-exclamation" style={{fontSize:"20px"}}></i> {props.msg}
                </div>
            </div>
            
          )
    }
  
}

export default Error