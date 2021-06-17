import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Item({ items, cantFind }) {
  const { id } = useParams();

  let snack = items.find(snack => snack.id === id);
  if (!snack) return <Redirect to={cantFind} />;

  let drink = items.find(drink => drink.id === id);
  if(!drink) return <Redirect to={cantFind} />

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
            {drink.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
