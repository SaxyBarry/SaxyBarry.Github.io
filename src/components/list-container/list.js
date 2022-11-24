import React from "react";

const ListCont = ({name, elements}) => {
    return(
        <div className="list-obj">
        <h2 key={name}>{name}</h2>
        <ul>
            {elements.map((x) => {
                return <li key={x}>{x}</li>;
            })}
        </ul>
        </div>
    )
};

export default ListCont;
