import React from 'react';

function Jumbotron(props:{name:string}) {
return (
<div className="jumbotron">
    <h1>{props.name}</h1>
</div>  
);
}

export default Jumbotron;