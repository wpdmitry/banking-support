import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import bcm from "./tools/bcm";

import Tabs from "./components/tabs";

import Chat from "./blocks/chat";
import Deposits from "./blocks/deposits";
import Deposit from "./blocks/deposit";
import Account from "./blocks/account";
import Accounts from "./blocks/accounts";

import { configureStore } from "./modules";

import styles from "./app.module.scss";

const b = bcm(styles);
const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className={b()}>
            <div className={b("chat")}>
              <Chat />
            </div>
            <div className={b("sidebar")}>
              <Switch>
                <Route path="/deposits/:depositId" component={Deposit} />
                <Route path="/accounts/:accountId" component={Account} />

                <Tabs
                  tabs={[
                    { title: "Счета", path: "/accounts", component: Accounts },
                    { title: "Вклады", path: "/deposits", component: Deposits }
                  ]}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
