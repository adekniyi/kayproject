import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Student from './Components/Student';
import Lecturer from './LecturerComponents/Lecturer';
import LecturerStudents from './LecturerComponents/LecturerStudents';
import StudentLogbook from './LecturerComponents/StudentLogbook';
import Admin from './Admin/Admin';
import AllLecturers from './Admin/AllLecturers';
import AllSupervisors from './Admin/AllSupervisors';
import AllStudents from './Admin/AllStudents';
import AddStudent from './Admin/AddStudent';
import AddLecturer from './Admin/AddLecturer';
import AddSupervisor from './Admin/AddSupervisor';
import MakePlacement from './Components/MakePlacement';
import Logbook from './Components/Logbook';
import Login from './Components/Login';

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
      <Route exact path={`/login`} component={() => <Login />} />
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

      <Route
        path='/admin'
        render={({ match: { url } }) => (
          <>
            <Switch>
              <Route exact path={`${url}/`} component={() => <Admin />} />
              <Route
                exact
                path={`${url}/allLecturers`}
                component={() => <AllLecturers />}
              />
              <Route
                exact
                path={`${url}/allStudents`}
                component={() => <AllStudents />}
              />
              <Route
                exact
                path={`${url}/allSupervisors`}
                component={() => <AllSupervisors />}
              />
              <Route
                exact
                path={`${url}/addStudent`}
                component={() => <AddStudent />}
              />
              <Route
                exact
                path={`${url}/addLecturer`}
                component={() => <AddLecturer />}
              />
              <Route
                exact
                path={`${url}/addSupervisor`}
                component={() => <AddSupervisor />}
              />
            </Switch>
          </>
        )}
      />
    </Switch>
  </>
));
export default App;
