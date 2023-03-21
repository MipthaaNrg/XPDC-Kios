import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonNav, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Main from './pages/Main'
import Login from './pages/Login'
import Reguler from './components/Reguler'
import Express from './components/Express'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import profil from './components/Profil';
import Profil from './components/Profil';
import KirimMotor from './components/KirimMotor';
import SewaTruck from './components/SewaTruck';
import Jobs from './components/Jobs';

setupIonicReact();
if(!localStorage.getItem('isLogin')){
  localStorage.setItem('isLogin', '0')
  localStorage.setItem('lastMenu', 'Beranda')
}

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          {(localStorage.getItem('isLogin') === '0')?
          <Redirect to="/login" />:
          <Redirect to="/main" />}
        </Route>
        <Route exact path="/Reguler" component={Reguler}></Route>
        <Route exact path="/Express" component={Express}></Route>
        <Route exact path="/profil" component={Profil}></Route>
        <Route exact path="/KirimMotor" component={KirimMotor}></Route>
        <Route exact path="/SewaTruck" component={SewaTruck}></Route>
        <Route exact path="/Jobs" component={Jobs}></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
