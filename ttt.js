let boxes=document.querySelectorAll('.box');
let rbtn=document.querySelector(".reset");
let msg=document.querySelector('.msg');
let win=document.querySelector('.win');

let turnO=false;

const winPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const reset=()=>{
    turnO=false;
    enableBox();
    win.classList.add('hide');
};

const enableBox=()=>{
    for(let box of boxes){
        box.style.pointerEvents = 'auto';
        box.innerHTML="";
    }
};

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO===false){
            box.innerHTML='X';
            turnO=true;
        }else{
            box.innerHTML='O';
            turnO=false;
        }
        box.style.pointerEvents = 'none';
        checkWinner();
    });
});

const disableBox=()=>{
    for(let box of boxes){
       box.style.pointerEvents = 'none';
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    win.classList.remove('hide');
    disableBox();
};
const checkWinner =()=>{
    for(let pattern of winPattern){
        const p1=boxes[pattern[0]].innerHTML;
        const p2=boxes[pattern[1]].innerHTML;
        const p3=boxes[pattern[2]].innerHTML;
        if(p1!='' && p2!='' && p3!=''){
            if(p1===p2 && p2===p3){
                showWinner(p1);
            }
        }

    }
}
rbtn.addEventListener('click',reset);
