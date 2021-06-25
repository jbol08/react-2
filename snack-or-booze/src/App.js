import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Item from "./FoodItem";
import NewItemForm from "./NewItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getItems() {
      let snacksList = await SnackOrBoozeApi.getSnacks();
      let drinksList = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacksList);
      setDrinks(drinksList);
      setIsLoading(false);
    }
    getItems();
  }, []);

  let addItem = async (newItem) => {
    let itemFormat = {
      ...newItem,
      id: newItem.name.toLowerCase().split(' ').join('-'),
      userAdd: true
    };
    if (newItem.type === 'snack') {
      await SnackOrBoozeApi.addSnack(itemFormat);
      setSnacks((snacks) => [...snacks, itemFormat]);
    } else if (newItem.type === 'drink') {
      await SnackOrBoozeApi.addDrink(itemFormat);
      setDrinks((drinks) => [...drinks, itemFormat]);
    }
  };

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" goTo='snacks' />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route exact path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" goTo='drinks' />
            </Route>
            <Route exact path="/new">
              <NewItemForm add={addItem} toggleLoading={setIsLoading}/>
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
