import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/LandingPages/Preloader/Preloader';
import { Suspense } from 'react/cjs/react.production.min';
import DashBoard from './components/DashBoard/MainMenu/DashBoard';

const LandingPages = React.lazy(() =>
  import('./components/LandingPages/LandingPages')
);
const About = React.lazy(() => import('./components/LandingPages/About/About'));
const CamAmb = React.lazy(() =>
  import('./components/LandingPages/Camp_Amb/CamAmb')
);
const Events = React.lazy(() =>
  import('./components/LandingPages/Events/Events')
);
const Team = React.lazy(() => import('./components/LandingPages/Team/Team'));
const Sponsors = React.lazy(() =>
  import('./components/LandingPages/Sponsors/Sponsors')
);
const Gallery = React.lazy(() =>
  import('./components/LandingPages/Gallery/Gallery')
);
const Guests = React.lazy(() =>
  import('./components/LandingPages/Guests/Guests')
);
const Register = React.lazy(() =>
  import('./components/LandingPages/Register/Register')
);
const Signup = React.lazy(() =>
  import('./components/LandingPages/Register/Signup/Signup')
);
const Login = React.lazy(() =>
  import('./components/LandingPages/Register/Login/Login')
);
const Forgot = React.lazy(() =>
  import('./components/LandingPages/Register/Forgot/Forgot')
);
const Reset = React.lazy(() =>
  import('./components/LandingPages/Register/Reset/Reset')
);
const Verify = React.lazy(() =>
  import('./components/LandingPages/Register/Verify/Verify')
);
const Home = React.lazy(() => import('./components/DashBoard/Home/Home'));
const Registration = React.lazy(() =>
  import('./components/DashBoard/Registration/Registration')
);
const Profile = React.lazy(() =>
  import('./components/DashBoard/Profile/Profile')
);
const ContingentEdit = React.lazy(() =>
  import('./components/DashBoard/Registration/ContingentEdit/ContingentEdit')
);
const EventsEdit = React.lazy(() =>
  import('./components/DashBoard/Registration/Events/EventsEdit/EventsEdit')
);

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Preloader />}>
                <LandingPages />{' '}
              </Suspense>
            }
          >
            <Route
              path=""
              element={
                <Suspense fallback={<Preloader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="register"
              element={
                <Suspense fallback={<Preloader />}>
                  <Register />
                </Suspense>
              }
            >
              <Route
                exact
                path="signup"
                element={
                  <Suspense fallback={<Preloader />}>
                    <Signup />
                  </Suspense>
                }
              />
              <Route
                exact
                path="login"
                element={
                  <Suspense fallback={<Preloader />}>
                    <Login />
                  </Suspense>
                }
              />
              <Route
                exact
                path="forgot"
                element={
                  <Suspense fallback={<Preloader />}>
                    <Forgot />
                  </Suspense>
                }
              />
              <Route
                exact
                path="reset"
                element={
                  <Suspense fallback={<Preloader />}>
                    <Reset />
                  </Suspense>
                }
              />
              <Route
                exact
                path="verify"
                element={
                  <Suspense fallback={<Preloader />}>
                    <Verify />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="about"
              element={
                <Suspense fallback={<Preloader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="events"
              element={
                <Suspense fallback={<Preloader />}>
                  <Events />
                </Suspense>
              }
            />
            <Route
              path="team"
              element={
                <Suspense fallback={<Preloader />}>
                  <Team />
                </Suspense>
              }
            />
            <Route
              path="guests"
              element={
                <Suspense fallback={<Preloader />}>
                  <Guests />
                </Suspense>
              }
            />
            <Route
              path="sponsors"
              element={
                <Suspense fallback={<Preloader />}>
                  <Sponsors />
                </Suspense>
              }
            />
            <Route
              path="ca"
              element={
                <Suspense fallback={<Preloader />}>
                  <CamAmb />
                </Suspense>
              }
            />
            <Route
              path="gallery"
              element={
                <Suspense fallback={<Preloader />}>
                  <Gallery />
                </Suspense>
              }
            />
          </Route>

          <Route path="/dashboard" element={<DashBoard />}>
            <Route
              path="home"
              element={
                <Suspense fallback={<Preloader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="registration"
              element={
                <Suspense fallback={<Preloader />}>
                  <Registration />
                </Suspense>
              }
            />
            <Route
              path="contingentEdit"
              element={
                <Suspense fallback={<Preloader />}>
                  <ContingentEdit />
                </Suspense>
              }
            />
            <Route
              path="events"
              element={
                <Suspense fallback={<Preloader />}>
                  <EventsEdit />
                </Suspense>
              }
            />
            <Route
              path="Profile"
              element={
                <Suspense fallback={<Preloader />}>
                  <Profile />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
