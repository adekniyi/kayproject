import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Student from './Components/Student';
import Lecturer from './LecturerComponents/Lecturer';
import LecturerStudents from './LecturerComponents/LecturerStudents';
import StudentLogbook from './LecturerComponents/StudentLogbook';

import MakePlacement from './Components/MakePlacement';
import Logbook from './Components/Logbook';

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
              <Route exact path={`${url}/`} component={() => <Student />} />
              <Route
                exact
                path={`${url}/placement`}
                component={() => <MakePlacement />}
              />
              <Route
                exact
                path={`${url}/logbook`}
                component={() => <Logbook />}
              />
            </Switch>
          </>
        )}
      />

      <Route
        path='/lecturer'
        render={({ match: { url } }) => (
          <>
            <Switch>
              <Route exact path={`${url}/`} component={() => <Lecturer />} />
              <Route
                exact
                path={`${url}/students`}
                component={() => <LecturerStudents />}
              />
               <Route
                exact
                path={`${url}/logbooks`}
                component={() => <StudentLogbook />}
              />
            </Switch>
          </>
        )}
      />
    </Switch>
  </>
));
export default App;
