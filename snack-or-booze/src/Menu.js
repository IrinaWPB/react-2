import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu({ items, cantFind }) {

  let { type } = useParams();
  console.log('type in menu', type)
  if (type !== 'snacks' && type !== 'booze') return <Redirect to={cantFind} />;

  let title = type.charAt(0).toUpperCase() + type.slice(1) + ' Menu'
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items[type].map(i => (
              <Link to={`/${type}/${i.id}`} key={i.id}>
                <ListGroupItem>{i.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;