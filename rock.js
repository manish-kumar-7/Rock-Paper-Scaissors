let userScore=0;
let comScore=0;
const msg=document.querySelector(".msg");
const userscore=document.querySelector("#userscore");
const comscore=document.querySelector("#computerscore");
const choices=document.querySelectorAll(".choice");

const gen_com_cho=()=>{
const option=["rock","paper","scissors"];
const random=Math.floor(Math.random()*3);
return option[random];

}

const draw=()=>{
    console.log("Game Is draw");
    msg.innerText="Game Was Draw Plat Again";
}

const winneris=(userwin)=>{
   if(userwin){
    userScore++;
    userscore.innerText=userScore;
    console.log("You Win");
    msg.style.backgroundColor="green";
    msg.style.color="white";
    msg.innerText="You Win";

   }
   else{
comScore++;
comscore.innerText=comScore;
    console.log("You Loose");
    msg.style.color="white";
    msg.style.backgroundColor="red";
    
    msg.innerText="You Loose";
   }
}


const playGame=(userChoice)=>{
console.log("User choice is :",userChoice);
const compchoice=gen_com_cho();
console.log("computer choice is :",compchoice);
let userwin=true;
if(userChoice===compchoice){
    draw();
}
else if(userChoice==="rock" && compchoice==="paper" ){
    userwin=false;
    winneris(userwin);
}
else if(userChoice==="rock" && compchoice==="scissors"){
    userwin=true;
    winneris(userwin);
}
else if(userChoice==="paper"&& compchoice==="scissors" ){
    userwin=false;
    winneris(userwin);
}
else if(userChoice==="paper"&& compchoice==="rock" ){
    userwin=true;
    winneris(userwin);
}

else if(userChoice==="scissors"&&  compchoice==="paper"){
    userwin=true;
    winneris(userwin);
}
else if(userChoice==="scissors"&& compchoice==="rock"){
    userwin=false;
    winneris(userwin);
}

}
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        console.log(choice);
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});