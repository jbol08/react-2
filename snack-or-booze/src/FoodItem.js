import React from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Item({ items, cantFind,goTo }) {
  const { id } = useParams() || 'cake';

  let item = items.find((item) => item.id === id);
	if (!item) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">
            {item.description}
          </CardText>
          <p>
            <b>Recipe:</b> {item.recipe} 
          </p>
          <p>
            <b>Serve:</b> {item.serve} 
          </p>
          <Link to={`/${goTo.toLowerCase()}`}>All {goTo}</Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
