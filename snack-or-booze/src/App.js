import React, { useState, useEffect } from "react";

import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { BrowserRouter, MemoryRouter, Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import AddForm from "./AddForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [booze, setBooze] = useState([]);

  useEffect(() => {
    async function getItems() {
      try {
        let snacks = await SnackOrBoozeApi.getSnackorBooze('snacks');
        setSnacks(snacks)
        let booze = await SnackOrBoozeApi.getSnackorBooze('drinks');
        setBooze(booze);
        setIsLoading(false);
      } catch (e) {
        if (e.response) console.log(e)
      }
    }
    getItems();
  }, []);

  const addItem = async (type, data) => {
    await SnackOrBoozeApi.addSnackorBooze(type, data);
    if (type === 'snacks') {
      let snacks = await SnackOrBoozeApi.getSnackorBooze('snacks');
      setSnacks(snacks)
    }
    if (type === 'drinks') {
      let booze = await SnackOrBoozeApi.getSnackorBooze('drinks');
      setBooze(booze);
    }
  }

  // if (isLoading) {
  //   return <p>Loading &hellip;</p>;
  // }

  return (
    <div className="App">
          <NavBar snacks={snacks} booze={booze}/>
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/addItem">
                <AddForm addItem={addItem} cantFind='/' />
              </Route>
              <Route exact path="/:type">
                <Menu items={{snacks, booze}} title="Menu" cantFind="/"/>
              </Route>
              <Route exact path="/:type/:id">
                <Item items={{snacks, booze}} cantFind='/' />
              </Route>
              <Route>
                <p>Hmmm. I can't seem to find what you want.</p>
              </Route>
            </Switch>
          </main>
    </div>
  );
}

export default App;
