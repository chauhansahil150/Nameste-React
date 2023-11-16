/*

Hot Module Replacement(HMR)
File watcher algorithm (in c++)
*/

import React,{createElement as ce} from 'react';
import ReactDOM from 'react-dom/client';

// jsx=>React.createElement => object => html(dom)
// const heading=<h1 id="title1" key="h1">Hello</h1>;
// or
// React.createElement => object => html(dom)
//or
// const heading=React.createElement('h1',{
//     id:'title1',
//     key:'h1'
// },'Hello');

const heading2=ce('h2',{
    id:'title2',
    key:'h2'
},'there');

// or

// React Element
const heading=(
    <h1 id="title1"
     key="h1">Hello
     </h1>
);

const Title=()=>(
        <div>
            MyTitle
        </div>
    )


// component composition
const HeadingComponent=()=>{
    return (
      <div>
        {heading}
        {Title()} 
        <Title/>
        {console.log('any js code')}
        <h3 id="title3"
        key="k3">Nameste
        </h3>
      </div>
    )
    }
const container=React.createElement('div',{},[heading,heading2]);
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(container);
root.render(<HeadingComponent/>);
