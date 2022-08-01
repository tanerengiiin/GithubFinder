import React, { useState ,useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './App.css';
import CardList from './CardList';
import Detail from './Detail';
import Navbar from './Navbar';
import Error from './Error';
import Homepage from './Homepage';


 
function getRepoLangs(repo_list){
  let repo_langs=[];
  for(let i=0; i<repo_list.length; i++){
    fetch(repo_list[i].languages_url)
    .then((res)=>{
      if(!res.ok){
        throw new Error("");
      }
      return res.json();
    }).then((data)=>{
      for(let j=0; j<Object.keys(data).length; j++){
        if(checkStat(repo_langs,Object.keys(data)[j])===-1){
          repo_langs.push({"name":Object.keys(data)[j],"point":Object.values(data)[j]});
        }else{
          repo_langs[checkStat(repo_langs,Object.keys(data)[j])].point+=Object.values(data)[j];
        }
      }
    }).catch(ee=>console.log(ee))
    
  }
  return repo_langs;
}
// function setStat(langs){
//   let userStats=[];
//   for(let i=0; i<langs.length; i++){
//     if(checkStat(userStats,langs[i].language)===-1){
//       let stat={"name":langs[i].language,"point":langs[i].size};
//       userStats.push(stat);
//     }else{
//       userStats[checkStat(userStats,langs[i].language)].point+=langs[i].size;
//     }
//   }
//   return userStats;
  
// }
function checkStat(arr,stat){
  for(let i=0; i<arr.length; i++){
    if(arr[i].name===stat){
      return i;
    }
  }
  return -1;
}
function App() {
  document.querySelector("title").innerHTML="Github Finder";
  const [users, setUsers] = useState([]);
  const [user,setUser]=useState([]);
  const [msg,setMsg]=useState("");
  const [repo,setRepo]=useState([]);
  const [stats,setStats]=useState([]);
  const [srchStyle,setSrchStyle]=useState(false);
  const [loading,setLoading]=useState(true);
  const [hp,setHp]=useState(true);
  let navigate = useNavigate();
  function getUser(login){
    
    document.querySelector("title").innerHTML=login;
    setLoading(true);  
    fetch("https://api.github.com/users/"+login)
    .then((res)=>{
      if(!res.ok){
        throw new Error("");
      }
      return res.json();
    }).then((data)=>{
      setUser(data);
      fetch(data.repos_url)
      .then((res2)=>{
        if(!res2.ok){
          throw new Error("");
        }
        return res2.json();
      }).then((data2)=>{
        data2.sort((a,b)=> (a.stargazers_count<b.stargazers_count?1:-1));
        setRepo(data2);
        setStats(getRepoLangs(data2));
        setTimeout(() => {
          setLoading(false);  
        }, 1000);
        
      })
    }).catch((err)=>{
      console.log(err);
    })
    
  }

  
  
 



  useEffect(() => {
    setLoading(true); 
    fetch("https://api.github.com/search/users?q=a")
    .then((res)=>{
      if(!res.ok){
        throw new Error("");
      }
      return res.json();
    }).then((data)=>{
      setUsers(data.items);
      setTimeout(() => {
        setLoading(false);  
      }, 1000);
      
    }).catch((err)=>{
      console.log(err);
      
    })
    if(srchStyle){
      
    }
  }, []);
  function searchUser(srch){
    if(srch===""){
      srch="a";
    }
    setLoading(true); 
      fetch("https://api.github.com/search/users?q="+srch)
      .then((res)=>{
        if(!res.ok){
          throw new Error("");
        }
        return res.json();
      }).then((data)=>{
        setTimeout(() => {
          setLoading(false);  
        }, 1000);
        
        if(data.items.length===0){
          throw new Error("The user does not found.")
        }else{
          setUsers(data.items);
        }
        navigate("../GithubFinder/users", { replace: true });
      }).catch((err)=>{
        console.log(err);
      })
    
  }

  function searchUser2(e){
    e.preventDefault();
    if(e.code ==="Enter" || e.keyCode===13){
      navigate("../GithubFinder/users", { replace: true });
      let srch=document.querySelector("#srch").value;
      if(srch===""){
        srch="a";
      }
      setLoading(true); 
      fetch("https://api.github.com/search/users?q="+srch)
        .then((res)=>{
          if(!res.ok){
            throw new Error("");
          }
          return res.json();
        }).then((data)=>{
          setUsers(data.items);
          setTimeout(() => {
            setLoading(false);  
          }, 1000);
          
        }).catch((err)=>{
          console.log(err);
        })
    }
  }
  return (
    
      <div className="App">
          <Navbar searchUser={searchUser} searchUser2={searchUser2} searchbar={hp}/>
          
          {/* <Error msg={msg}/> */}
          <Routes>
          <Route path='/GithubFinder/' element={<Homepage loading={loading} searchUser={searchUser}/>} />
            <Route path='/GithubFinder/users' element={<CardList loading={loading }users={users} getUser={getUser}/>}/>
            {/* <Route path={'/user/'+user.login}  element={<Detail user={user} repo={repo} userStats={stats}/>}/> */}

            <Route path='/GithubFinder/users/:login' element={<Detail loading={loading} getUser={getUser} user={user} repo={repo} userStats={stats}/>}/>
            
          </Routes>
      </div>
    
  );
}

export default App;
