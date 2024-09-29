let userscore= 0;
let compscore= 0;
let choices=document.querySelectorAll('.choice');
let msg=document.querySelector('#msg');
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showwinner=(userwin,compchoice,userchoice)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText=`You are Winner! Your ${userchoice} beats ${compchoice}`;
        msg.style.color="green";

    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText=`You are Loser! ${compchoice} beats your ${userchoice}`;
        msg.style.color = "red";
    }

};

const drawGame=()=>{
    msg.innerText="Game was Draw . Play again.";
    msg.style.color = "blue";
};
const gencompchoice=()=>{
    const option=['rock','paper','scissor'];
    const randindx=Math.floor(Math.random()*3);
    return option[randindx];
    
};
const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    
    if(userchoice===compchoice){
        drawGame();
    }
    else{
        let userwin=true;
        if(userchoice==='rock'){
            userwin=compchoice==='paper'?false:true;
        }
        else if(userchoice==='paper'){
            userwin=compchoice==='scissor'?false:true;
        }       
        else if(userchoice==='scissor'){
            userwin=compchoice==='rock'?false:true;
        }
        showwinner(userwin,compchoice,userchoice);
    }
};
choices.forEach((choose) => {
    choose.addEventListener("click", () => {
        const userchoice = choose.getAttribute('id');
        // console.log(userchoice);
        playgame(userchoice);
    });
});

