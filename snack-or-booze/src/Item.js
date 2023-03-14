import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Item({ items, cantFind }) {
  const { type } = useParams()  
  const { id } = useParams();
  
  console.log('type', type, 'id', id)
  //Check if type is valid
  if (type !== 'snacks' && type !== 'booze') return <Redirect to={cantFind} />;

  //Check if id is valid for the type
  let item = items[type].find(i => i.id === id);
  console.log(item)
  if (!item) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
