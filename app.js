let x=document.getElementsByTagName("input")

let r=document.getElementById("result")

window.addEventListener('keypress', function(e)
{
    console.log(e.key)
    r.innerHTML+=e.key;

   for(let i=0;i<x.length;i++)
   {
    if(e.key==(x[i].value).toLowerCase())
        x[i].style.backgroundColor="red";

    else if(e.key==(x[i].value).toUpperCase())
        x[i].style.backgroundColor="red";
    else
    x[i].style.backgroundColor="white";
    } 
})


window.addEventListener('keydown',function(e)
{
    
    if(e.key==="Backspace")
        {
          
          let s=r.innerHTML.slice(0,-1);
           r.innerHTML=s

        }

        else if(e.key===' ')
        {
            r.innerHTML+='&nbsp;'
        }

})

