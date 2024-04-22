let userscore=0;
let computerscore=0;
let option=['paper','stone','scissors'];

const circle=document.querySelectorAll(".circle");

let but=document.querySelector("#but");
let use=document.querySelector("#user");
let comp=document.querySelector("#comput");


 circle.forEach((cir)=>{

    cir.addEventListener("click",()=>{
       palygame(cir.getAttribute("id"));
    } )
 })


 function computer(){
    let index= Math.floor( Math.random()*3);
    return option[index];
    }


 function palygame(choice){
    let user=true;
    console.log("user choice",choice);
    let computervalue=computer();
    console.log("computer choice",computervalue);
    //it wikk generate the choice

    if(computervalue === choice){
        //draw
        console.log("match is draw");
        but.innerText="match is draw play again";
        but.classList.remove("lost");
        but.classList.remove("win");
    }

    else {
     
            if(choice=="stone"){
                //if user is stone then computer can be only paper or scissors
               user=( computervalue=="scissors"?true:false);
            }
           else if(choice=="paper"){
                //if user is stone then computer can be only stone or scissors
               user= (computervalue == "stone"?true:false);

            }
          else if(choice=="scissors"){
            console.log("usert is ",user);
                //if user is stone then computer can be only stone or paper
               user= (computervalue == "paper"?true:false);
            
            }
     
        winner(user);  

    }
    
 }


 

function winner(win){
    if(win){
        console.log("user is the winner");
        userscore++;
        but.innerText="user is the winner";
        use.innerText=userscore;
        but.classList.add("win");
        but.classList.remove("lost");
         
    }
    else{
        console.log(`computer is the winner as `);
        computerscore++;
        but.innerText="computer is the winner";
        comp.innerText=computerscore;
        but.classList.add("lost");
        but.classList.remove("win");

    }
}