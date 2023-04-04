const cellel = document.querySelectorAll(".game-board .cell");
const player1 = document.querySelector(".players .player1");
const player2 = document.querySelector(".players .player2");
const result = document.querySelector(".result");
const result_text= document.querySelector(".result h2");
const result_rest=document.querySelector(".result button");
let toggleturn = true;
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const playero="O";
const playerx="X";
cellel.forEach(cell => {
    cell.onclick=()=>
    {
        // console.log(cell.innerText);
        let currentplayer = toggleturn ? playero : playerx;
        cell.classList.add("disable");

        // toggleturn = !toggleturn;
        addInCell(cell, currentplayer);
        if(winercheck(currentplayer))
        {
            // console.log(currentplayer+" WINNER");
            result.classList.remove("inactive");
            result_text.innerText = currentplayer + "Win The Game";
        }
        if(isdrwa)
        {
            console.log("Game is Draw");
        }
            swapplayer();
    }
});

function winercheck(currentplayer)
{
    return win.some(conditon=>{
        // console.log(conditon);
        return conditon.every(index=>{
            return cellel[index].classList.contains(currentplayer);
        });
    });
}


function isdrwa()
{
    return [...cellel].every(cell=>{
        return cell.classList.contains(playerx) || cell.classList.contains(playero);
    });
}

function swapplayer()
{
    toggleturn = !toggleturn;
    if(toggleturn)
    {
        player1.classList.add("active");
        player2.classList.remove("active");
    }
    else
    {
        player2.classList.add("active");
        player1.classList.remove("active");
    }
}

function addInCell(cell, currentplayer)
{
    cell.innerHTML= currentplayer;
    cell.classList.add(currentplayer)
}
result_rest.onclick=()=>{
    location.reload();
}