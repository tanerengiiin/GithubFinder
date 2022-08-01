import React from 'react'

function Repo(props) {
    
  return (
    <div className='repo'>
        <div className='repo_title'>{props.repo.name}</div>
        <div className='repo_created'>Last updated at {props.repo.updated_at.split("-")[1]+"/"+props.repo.updated_at.split("-")[0]}</div>
        <div className='repo_txt'>{props.repo.description}</div>
        
        <div className='repo_links'>
            <div className='repo_tags'>
                <div className='repo_star' style={{display:props.repo.stargazers_count===0? "none":"block"}}><i className="fa-solid fa-star"></i> {props.repo.stargazers_count}</div>
                <div className='repo_lang' style={{display:props.repo.language===null? "none":"block"}}><i className="fa-solid fa-chart-simple"></i> {props.repo.language}</div>
            </div>
            <div className='repo_link'>
                <a href={props.repo.html_url}>Open Github</a>
            </div>
        </div>
    </div>
  )
}

export default Repo