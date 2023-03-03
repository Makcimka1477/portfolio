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

// responsive marvel app

// background
// html[data-theme="dark"] {
//   .home {
//     background-image: url("https://phonoteka.org/uploads/posts/2022-01/thumbs/1643116770_13-phonoteka-org-p-chernii-strogii-fon-17.jpg");
//   }
// }
// html[data-theme="light"] {
//   .home {
//     background-image: url("https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
//   }
// }

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
