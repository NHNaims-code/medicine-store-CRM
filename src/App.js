import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { StoreLayout } from './components/layout/layouts/StoreLayout/StoreLayout';

import { Dashboard, Expired, Medicines, Purchase, Sales, SignIn, ForgotPassword, SignUp } from "./pages/Store";
import { NotFound } from "./components/common";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LandingPage/>
          </Route>
          <Route exact path='/store/dashboard'>
            <StoreLayout><Dashboard/></StoreLayout>
          </Route>
          <Route exact path='/store/medicines'>
            <StoreLayout><Medicines/></StoreLayout>
          </Route>
          <Route exact path='/store/sales'>
            <StoreLayout><Sales/></StoreLayout>
          </Route>
          <Route exact path='/store/purchase'>
            <StoreLayout><Purchase/></StoreLayout>
          </Route>
          <Route exact path='/store/expired'>
            <StoreLayout><Expired/></StoreLayout>
          </Route>
          <Route exact path='/store/signin'>
            <SignIn/>
          </Route>
          <Route exact path='/store/signup'>
            <SignUp/>
          </Route>
          <Route exact path='/store/forget-password'>
            <ForgotPassword/>
          </Route>
          
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
