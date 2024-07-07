let input=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");

let string=""; 
let arr=Array.from(buttons);


arr.forEach((button) => {
    button.addEventListener("click",(e) => {
        if(e.target.innerText=='='){
            /* e is an event object that contains information about the type of event occured 
            and target is a property of e object that refers to the element on which event was 
            actually triggered.*/
            string=eval(string);
            input.value=string;
            /* input is an element and value is a property of input element 
             that represents its current value */
        }
        else if(e.target.innerText=='AC'){
            string="";
            input.value=string;
        } else if(e.target.innerText=='Clear'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.innerText;
            input.value=string;
        }
    })
});
