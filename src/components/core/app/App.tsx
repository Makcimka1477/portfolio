import css from "./App.module.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AboutPage from "../../../pages/AboutPage";
import ProjectPage from "../../../pages/ProjectPage";
import ProjectsPage from "../../../pages/ProjectsPage";
import HomePage from "../../../pages/HomePage";
import Header from "../header/Header";

import { ThemeContext } from "../../../contexts/themeContext";

// HOVER EFFECTS AND ANIMATIONS

// PORTFOLIO SITES

// WRAPPER STYLES IN TO INDEX.SCSS

// СЖАТЬ КАРТИНКИ ТЕМЫ

// Разделить компоненты навигации

// СПРЯТАТЬ БУРГЕР ЗА ABOUT

// MARVEL API, FOOD на гитхаб оттуда выгрузить в интернет
// Разобраться с гитом

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
            <ProjectsPage />
            <Route path="/projects/:id">
              <ProjectPage />
            </Route>
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
