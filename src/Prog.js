import React from 'react'

function Prog(props) {
  console.log( props.progStat);
  return (
    <div className='progress'>
        <div className='progress_header'>
            <div className='prog_title'>{props.progName}</div>
            <div className='prog_percent'>{props.progStat==="0"?"<1":props.progStat}%</div>
        </div>
        <div className='progress_bar' >
          <div className='main_progress_bar' style={{width:props.progStat==="0"?1:props.progStat+"%"}}></div>
        </div>
    </div>
  )
}

export default Prog