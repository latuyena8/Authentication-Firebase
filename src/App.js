import firebase from 'firebase';
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from "./components/home";
import NotFound from "./components/NotFound";
import SignInComponent from "./components/SignIn";

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOAMIN,
};
firebase.initializeApp(config);

function App() {

  // Handle firebase auth changed
  useEffect(() => {

    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        return;
      }
      // const token = await user.getIdToken()
    });


    return () => unregisterAuthObserver();
  }, []);


  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/sign-in" component={SignInComponent} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
