
import './Homepage.css';
import Review from './Review';
import svg from './svg3.svg'
import React, { useEffect ,useState} from 'react';
import Loading from './Loading';
function Homepage(props) {
    
    console.log(window.innerWidth)
    function handleStarred(id){
        let stars=document.querySelectorAll(".hp_star");
        for(let i=0; i<stars.length; i++){
            stars[i].classList.remove("star_active");
        }
        for(let i=0; i<id; i++){
            stars[i].classList.add("star_active");
        }
    }
    function handleStarredLeft(){
        let stars=document.querySelectorAll(".hp_star");
        for(let i=0; i<stars.length; i++){
            stars[i].classList.remove("star_active");
        }
    }
    function handleStarredClick(id){
        let stars=document.querySelectorAll(".hp_star");
        for(let i=0; i<id; i++){
            stars[i].classList.add("star_anm");
        }
        setTimeout(() => {
            for(let i=0; i<id; i++){
                stars[i].classList.remove("star_anm");
            }    
        }, 300);
        
    }
    function Anm(){
        var elm1=document.querySelector(".hp_mid_1").getBoundingClientRect();
        console.log(elm1.top)
    }

    useEffect(() => {
        window.addEventListener("scroll",(e)=>{
            var windowHeight=window.innerHeight;
            var p=175;
            var feat1=document.querySelector(".feat1");
            var feat2=document.querySelector(".feat2");
            var feat3=document.querySelector(".feat3");
            var hp_mid_1=document.querySelector(".hp_mid_1");

            if(hp_mid_1.getBoundingClientRect().top < windowHeight-p){
                feat1.classList.add("active");
                setTimeout(() => {
                    feat2.classList.add("active");    
                    setTimeout(() => {
                        feat3.classList.add("active");
                    }, 700);
                }, 700);
                
            }
            var hp_elm=document.querySelectorAll(".hp_");
            for(let i=0; i<hp_elm.length; i++){
                
                var elmTop=hp_elm[i].getBoundingClientRect().top;
                
                if(elmTop<windowHeight-p){
                    hp_elm[i].classList.add("active")
                }
            }
            
            
        })
        window.addEventListener('mousemove', (e) => {
          let ic=document.querySelectorAll(".ic");
          ic.forEach(function(move){
            var moving_value=move.getAttribute("data-value");
            var x=(e.clientX * moving_value)/250;
            var y=(e.clientY * moving_value)/250;

            move.style.transform="translateX("+x+"px) translateY("+y+"px)  rotate("+(moving_value*10)+"deg) ";
          })
          
        });
        
      }, []);

      const [st,setSt]=useState(false);
      useEffect(()=>{
        let search=document.querySelector(".hp_top_left_3");
        if(st){
          search.style.borderColor="#8869FA";
          search.style.boxShadow="#d2c5fb8f 0px 0px 0px 5px";
          search.style.backgroundColor="white";
          search.style.border="1px solid #8869FA";
    
        }else{
          search.removeAttribute("style");
        }
      },[st])
      function  handleSubmit(e){
        console.log("çalş")
            props.searchUser(document.querySelector(".hp_search").value)
            e.preventDefault();
      }
      
      return (

    <div className='homepage'>
        <div className='con'>
            <div className='hp_top_header'>
                <div className='hp_top_left'>
                    <div className='hp_top_left_1'>Search. Info. Stats.</div>
                    <div className='hp_top_left_2'>Search github user and see stats.</div>
                    <form  className='hp_top_left_3' onFocus={()=>{setSt(true)}} onBlur={()=>{setSt(false)}} onSubmit={handleSubmit}>
                        <div className='hp_s_i'><i class="fa-solid fa-magnifying-glass"></i></div>
                        <div className='hp_s'><input type={"search"} className="hp_search" placeholder='Search for user'/></div>
                    </form>
                    <div className='hp_top_left_4'>Search for any user by username</div>
                </div>
                <div className='hp_top_right'>
                        <img src={svg} alt="svg"/>
                </div>
            </div>
            <div className='hp_mid_1 '>
                <div className='hp_mid_title'>Features of The Application</div>
                <div className='hp_mid_exp'>Some Features You Can Use</div>
                <div className='hp_mid_1_feat'>
                    <div className='feat feat1' >
                        <div className='feat_icon_con'>
                            <div className='feat_icon'><i className="fa-solid fa-chart-simple"></i></div>
                        </div>
                        <div className='feat_title'>User Stats</div>
                        <div className='feat_exp'>see the languages most used by the user</div>
                    </div>
                    <div className='feat feat2' >
                        <div className='feat_icon_con'>
                            <div className='feat_icon'><i class="fa-solid fa-file-lines"></i></div>
                        </div>
                        <div className='feat_title'>User Repos</div>
                        <div className='feat_exp'>see user's repos</div>
                    </div>
                    <div className='feat feat3'>
                        <div className='feat_icon_con'>
                            <div className='feat_icon'><i class="fa-solid fa-star"></i></div>
                        </div>
                        <div className='feat_title'>User Info</div>
                        <div className='feat_exp'>see user's other information</div>
                    </div>
                </div>
            </div>
            <div className='hp_mid_2 hp_'>
                    
                <div className='hp_mid_title'>Decide Based on Reviews</div>
                <div className='hp_mid_exp'>Employers' Choice</div>
                <div className='hp_mid_likes'>
                    <div id='ic1' className='ic' data-value="-2"><i className="fa-solid fa-thumbs-up"></i></div>
                    <div id='ic2' className='ic' data-value="3"><i className="fa-solid fa-thumbs-up"></i></div>
                    <div id='ic3' className='ic' data-value="4"><i className="fa-solid fa-heart"></i></div>
                    <div id='ic4' className='ic' data-value="-3"><i className="fa-solid fa-heart"></i></div>
                    <div className='hp_mid_likes_left'>
                        <div className='hp_mid_likes_main'>4.7<span className='hp_mid_likes_side'>/5</span></div>
                        <div className='hp_mid_likes_bottom'>Based on 40 reviews</div>
                        <div className='hp_mid_likes_stars' onMouseLeave={()=>handleStarredLeft()}>
                            <div className='hp_star' onMouseEnter={()=>handleStarred(1)} onClick={()=>handleStarredClick(1)}><i className="fa-solid fa-star"></i></div>
                            <div className='hp_star' onMouseEnter={()=>handleStarred(2)} onClick={()=>handleStarredClick(2)}><i className="fa-solid fa-star"></i></div>
                            <div className='hp_star' onMouseEnter={()=>handleStarred(3)} onClick={()=>handleStarredClick(3)}><i className="fa-solid fa-star"></i></div>
                            <div className='hp_star' onMouseEnter={()=>handleStarred(4)} onClick={()=>handleStarredClick(4)}><i className="fa-solid fa-star"></i></div>
                            <div className='hp_star' onMouseEnter={()=>handleStarred(5)} onClick={()=>handleStarredClick(5)}><i className="fa-solid fa-star"></i></div>
                        </div>
                    </div>
                    <div className='hp_mid_likes_right'>
                        <div className='hp_mid_likes_prog'>
                            <div className='hp_likes_prog_title'>5&nbsp;star</div>
                            <div className='hp_likes_prog'>
                                <div className='hp_likes_main_prog' style={{width:"62%"}}></div>
                            </div>
                            <div className='hp_likes_prog_exp'>56%</div>
                        </div>
                        <div className='hp_mid_likes_prog'>
                            <div className='hp_likes_prog_title'>4&nbsp;star</div>
                            <div className='hp_likes_prog'>
                                <div className='hp_likes_main_prog' style={{width:"32%"}}></div>
                            </div>
                            <div className='hp_likes_prog_exp'>24%</div>
                        </div>
                        <div className='hp_mid_likes_prog'>
                            <div className='hp_likes_prog_title'>3&nbsp;star</div>
                            <div className='hp_likes_prog'>
                                <div className='hp_likes_main_prog' style={{width:"16%"}}></div>
                            </div>
                            <div className='hp_likes_prog_exp'>12%</div>
                        </div>
                        <div className='hp_mid_likes_prog'>
                            <div className='hp_likes_prog_title'>2&nbsp;star</div>
                            <div className='hp_likes_prog'>
                                <div className='hp_likes_main_prog' style={{width:"10%"}}></div>
                            </div>
                            <div className='hp_likes_prog_exp'>5%</div>
                        </div>
                        <div className='hp_mid_likes_prog'>
                            <div className='hp_likes_prog_title'>1&nbsp;star</div>
                            <div className='hp_likes_prog'>
                                <div className='hp_likes_main_prog' style={{width:"5%"}}></div>
                            </div>
                            <div className='hp_likes_prog_exp'>2%</div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        <div className='hp_mid_3 hp_'>
            
            <div className='hp_mid_title' style={{marginTop:"40px"}}>Give us Feedback</div>
            <div className='hp_mid_exp'>We can do much more thanks to you</div>
            <div className='discord_area'>
                <div className='dc_background'>
                    <div id='ic5' className='ic' data-value="3"><i className="fa-solid fa-paper-plane"></i></div>
                    <div id='ic6' className='ic' data-value="-1.75"><i className="fa-solid fa-paper-plane"></i></div>
                    <div id='ic7' className='ic' data-value="-5">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="74.669" height="134.669" viewBox="0 0 134.669 134.669">
                            <g  transform="translate(-2693.611 -1611.118) rotate(-42)" clip-path="url(#clip-path)">
                                <path id="airwave_FILL1_wght400_GRAD0_opsz48" d="M173.4,242.335a24.233,24.233,0,0,1-8.36,5.549,26.015,26.015,0,0,1-19.026,0,24.233,24.233,0,0,1-8.36-5.549l-10.81-10.81a15.686,15.686,0,0,0-5.405-3.6,16.848,16.848,0,0,0-12.252,0,15.686,15.686,0,0,0-5.405,3.6l-9.8,9.8-6.2-6.054,9.8-9.945a24.233,24.233,0,0,1,8.36-5.549,25.555,25.555,0,0,1,9.369-1.8,25,25,0,0,1,9.3,1.8,24.417,24.417,0,0,1,8.288,5.549l10.81,10.81a16.415,16.415,0,0,0,5.477,3.676,16.745,16.745,0,0,0,6.342,1.225,16.206,16.206,0,0,0,6.27-1.225,16.628,16.628,0,0,0,5.405-3.676l9.8-9.8,6.2,6.2Z" transform="translate(793.221 2860.905)" fill="#7d84a1"/>
                            </g>
                        </svg>
                    </div>
                    <div id='ic8' className='ic' data-value="4">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="64.669" height="134.669" viewBox="0 0 134.669 134.669">
                            <g  transform="translate(-2693.611 -1611.118) rotate(-42)" clip-path="url(#clip-path)">
                                <path id="airwave_FILL1_wght400_GRAD0_opsz48" d="M173.4,242.335a24.233,24.233,0,0,1-8.36,5.549,26.015,26.015,0,0,1-19.026,0,24.233,24.233,0,0,1-8.36-5.549l-10.81-10.81a15.686,15.686,0,0,0-5.405-3.6,16.848,16.848,0,0,0-12.252,0,15.686,15.686,0,0,0-5.405,3.6l-9.8,9.8-6.2-6.054,9.8-9.945a24.233,24.233,0,0,1,8.36-5.549,25.555,25.555,0,0,1,9.369-1.8,25,25,0,0,1,9.3,1.8,24.417,24.417,0,0,1,8.288,5.549l10.81,10.81a16.415,16.415,0,0,0,5.477,3.676,16.745,16.745,0,0,0,6.342,1.225,16.206,16.206,0,0,0,6.27-1.225,16.628,16.628,0,0,0,5.405-3.676l9.8-9.8,6.2,6.2Z" transform="translate(793.221 2860.905)" fill="#7d84a1"/>
                            </g>
                        </svg>
                    </div>
                <div className='dc_pp_back'>
                    <div className='dc_pp'>
                        <img  src='https://i1.sndcdn.com/artworks-xnBaVxgGS9V3xJSY-bsxbiw-t500x500.jpg' alt="yok"/>
                    </div>
                    </div>
                    <div className='dc_username'>taner<span style={{color:"#B3B5B8"}}>#8639</span></div>
                    <div className='dc_line'></div>
                    <div className='dc_title'>ABOUT ME</div>
                    <div className='dc_about'><a target="_blank" href='https://tanerengin.cf'>https://tanerengin.cf</a></div>
                    <div className='dc_title'>ROLES</div>
                    <div className='dc_role'>
                        <div className='dc_circle'><i className="fa-solid fa-circle"></i></div>
                        <div className='dc_role_name'>Frontend Developer</div>
                    </div>
                    <div className='dc_title'>NOTE</div>
                    <div className='dc_note'>You can reach me on discord</div>
                </div>
            </div>
        </div>
    </div>
  )
  
}


export default Homepage