import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  loadRootComponent: (props) => new Promise((resolve, reject) => {
    resolve(() => <Root {...props} />);
  }),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});


export const { bootstrap, mount, unmount, update } = lifecycles;

