import css from "./App.module.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ThemeContext } from "../../../contexts/themeContext";
import ProjectsProvider from "../../../contexts/projects-provider/ProjectsProvider";

import {
  AboutPage,
  ProjectPage,
  ProjectsPage,
  HomePage,
} from "../../../pages/index";

import Header from "../header/Header";

// WRAPPER STYLES IN TO INDEX.SCSS
// button component

// DOWNLOAD CV

// ALL MY INFO IN ONE OBJECT
// {tel: , whatsapplink, telegramlink, skills}

// HOVER EFFECTS AND ANIMATIONS
// ACTIVE EFFECTS BUTTON

function App() {
  return (
    <div className={css.app}>
      <Router>
        <ThemeContext.Consumer>
          {({ theme, setTheme }: any) => (
            <Header theme={theme} setTheme={setTheme} />
          )}
        </ThemeContext.Consumer>
        <Switch>
          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/projects">
            <ProjectsProvider>
              <ProjectsPage />
            </ProjectsProvider>
          </Route>

          <Route path="/projects/:id">
            <ProjectsProvider>
              <ProjectPage />
            </ProjectsProvider>
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Redirect to={"/"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
