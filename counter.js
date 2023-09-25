let c=0
let element=document.getElementById("Inc")
    element.addEventListener('click', ()=>{
        c++
        count.innerText = c;
    });

let elem=document.getElementById("Dec")
    elem.addEventListener('click', ()=>{
        c--
        count.innerText = c;
    });

let el=document.getElementById("Res")
    el.addEventListener('click', ()=>{
        c=0
        count.innerText = c;
    })
