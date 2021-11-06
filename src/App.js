import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Student from "./Components/Student"
import MakePlacement from "./Components/MakePlacement"
import Logbook from "./Components/Logbook"


function App() {

  return (

    <>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </>
  );
}


const MainComponent = withRouter(({ location, history, match }) => (
  <>
    <Switch>


    <Route
          path='/student'
          render={({ match: { url } }) => (
            <>
              <Switch>
                <Route
                  exact
                  path={`${url}/`}
                  component={() => <Student/> }
                />
                <Route
                  exact
                  path={`${url}/placement`}
                  component={() => <MakePlacement/>}
                />
                 <Route
                  exact
                  path={`${url}/logbook`}
                  component={() => <Logbook/>}
                />
              </Switch>
            </>
          )}
        />
    </Switch>
  </>
));
export default App;
