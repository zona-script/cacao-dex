import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Web3Provider from "web3-react";
import { Connectors } from "web3-react";

import Web3 from "web3";

const networks = {
  1337: { name: "Local" },
  4: { name: "Ropsten" },
  1: { name: "Mainnet" },
};
const supportedNetworks = Object.keys(networks).map(Number);
console.log({ supportedNetworks });

const { InjectedConnector, NetworkOnlyConnector } = Connectors;
const MetaMask = new InjectedConnector({ supportedNetworks });
const Infura = new NetworkOnlyConnector({
  providerURL: "https://mainnet.infura.io/v3/727fb6ad8d4449a18315a17a79131cc7",
});
const connectors = { MetaMask, Infura };

ReactDOM.render(
  <Web3Provider connectors={connectors} libraryName="web3.js" web3Api={Web3}>
    <App />
  </Web3Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
