import React, { useState ,useEffect } from 'react';

function Search(props) {
  
  const [inp,setInp]=useState("");
  const [st,setSt]=useState(false);
  useEffect(()=>{
    let search=document.querySelector(".search");
    if(st){
      search.style.borderColor="#8869FA";
      search.style.boxShadow="#d2c5fb8f 0px 0px 0px 4px";
      search.style.backgroundColor="white";
      document.querySelector("#srch").style.backgroundColor="white";

    }else{
      search.removeAttribute("style");
      document.querySelector("#srch").removeAttribute("style")
      
    }
  },[st])
  function handleSubmit(e){
    e.preventDefault();
    props.searchUser(document.querySelector("#srch").value);
  }
  
  return (
    <div className='search'>
      <div className='search_logo' ><i className="fa-solid fa-magnifying-glass"></i></div>
      <div className='search_body'>
        <div className='search_input'  >
          <form onSubmit={handleSubmit}>
            <input type={"search"} id="srch" placeholder='Search for users' onFocus={()=>setSt(!st)} onBlur={()=>setSt(!st)} />
          </form>
        </div>
        
      </div>
        
    </div>
  )
}

export default Search