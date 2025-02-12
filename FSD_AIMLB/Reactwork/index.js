console.log("hello");
const parent =document.getElementById('root')
console.dir(parent);
const root=ReactDOM.createRoot(parent);
/*const h1=React.createElement("h1",{style:{color:'cyan'}},"ABES Engineering College");
const l1=React.createElement("li",{},"Orange");
const l2=React.createElement("li",{},"Apple");
const ul=React.createElement("ul",{style:{backgroundColor:'red'}},l1,l2);
const element = <h1>Hello, world!</h1>;*/

const element =<h1>hello,world</h1>;
const l1=<li>orange</li>;
const l2=<li>apple</li>;
const ul=<ul>{l1}{l2}</ul>

const container=(
    <div style={{backgroundColor:'cyan'}}>
         <div>{element}</div> 
         <div>{ul}</div>


    </div>
)
root.render(container);