import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu({ items,title }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            Check out our menu!
          </CardText>
          <ListGroup>
						{items.map((item) => {
							return (
								<div className="Item" key={item.id}>
									<Link data-testId={`link-${item.id}`} to={`/${title.toLowerCase()}/${item.id}`}>
										<ListGroupItem>{item.name}</ListGroupItem>
									</Link>
									
								</div>
							);
						})}
					</ListGroup>      
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
