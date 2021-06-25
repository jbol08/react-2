import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from 'react-router-dom';

function Home({snacks,drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <CardText>
            <h4>
              We have { }
              <Link to='/snacks'>
              {snacks.legnth} snacks
              </Link >
              { } and { }
              <Link to='/drinks'>
              {drinks.length} drinks,
              </Link>
              { } choose wisely!
            </h4>
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
