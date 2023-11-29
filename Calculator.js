let str="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        
        if (e.target.innerHTML=='=') {
            console.log(e.target);
            str=eval(str);
            document.querySelector('input').value=str;
        } 
        
        
        else {
            console.log(e.target.innerHTML)
            str=str+e.target.innerHTML;
            document.querySelector('input').value=str;
        }
        if (e.target.innerHTML=='AC') {
            console.log(e.target.innerHTML)
            str="";
            document.querySelector('input').value=str;
        }
        
        
    })
})