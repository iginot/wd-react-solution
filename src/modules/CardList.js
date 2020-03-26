// React core
import React from 'react';

// Components
import Card from "./Card";

function CardList(props) {
    // Data
    const card = props.prop.map((item) =>
        <Card key={item.id} prop={item} />
    );

    // Render
    return <section className="CardList">{card}</section>
}

export default CardList;