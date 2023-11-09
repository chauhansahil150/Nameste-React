const heading=React.createElement('h1',{},'Hello');
const heading2=React.createElement('h1',{},'World');
const container=React.createElement('div',{},[heading,heading2]);
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(container);