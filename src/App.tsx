import React from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonRouterOutlet } from '@ionic/react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => (
  <IonApp>
    <Router>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DivisApp SUNUMERO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </Router>
  </IonApp>
);

export default App;
