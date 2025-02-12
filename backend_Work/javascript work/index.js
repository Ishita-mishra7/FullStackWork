/*function fun(a,b){
    console.log("heee");
    return a+b;
}
let data=fun(12,5);
console.log(data);


function cCompiler(){
    return "C COMPILER"
}

function javaCompiler(){
    return "java compiler";
}

function selectlanguage(clbk){
    return "you have selected:"+clbk();
}
const result=selectlanguage(cCompiler);
console.log(result);*/
/*const div=document.getElementById
console.log(div)
div[0].innerHTML="<h2 style=color:red>Hello world </
const h1=document
h1.styleSheets.backgriundColor='cyan';
console.log(h1);
const img=document.createElement('img');

img.src='./abeslogo.jpg';

img.setAttribute("height","200");
console.log(img);
div[0].appendChild(img)*/
/*const disp=document.getElementById("disp");
console.dir(disp);
function getData(){
    console.log("getdata called");
    disp.innerHTML="<h2>hello</h2>";
}


btn.addEventListener("click",getData);*/

const promise=new promise((resolve,reject)=>{
let a=12;
if(a>10){
    resolve("resolved");
}
else{
    reject("rejected");
}
}
);
promise.then((msg)=>console.log(msg))
.catch(error=>console.log(error))
