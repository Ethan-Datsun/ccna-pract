const texEl = document.getElementById("text")
const speedEl = document.getElementById("speed")

const text = "We Love Spicejet"


let indx=1

const SPEED_CONSTANT = 500
let time = SPEED_CONSTANT/speedEl.value



const writeText = () =>{
    texEl.innerHTML = text.slice(0,indx)

    indx++;

    if(indx>text.length){
        indx=1;
    }

    setTimeout(writeText,time)
}

writeText()

speedEl.addEventListener("input",(e)=>{
    time=SPEED_CONSTANT/e.target.value
})
