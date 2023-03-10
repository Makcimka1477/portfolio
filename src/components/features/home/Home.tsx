import css from "./Home.module.scss";

import Title from "../ui/Title/Title";

const Home = () => {
  const mySkills = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "React",
    "Redux",
    "NPM",
  ];

  const mySkillsItems = mySkills.map(
    (skillName: string): JSX.Element => (
      <li key={skillName} className={css.mySkillsItem}>
        {skillName}
      </li>
    )
  );

  return (
    <div className={css.home}>
      <header className={css.header}>
        <div className={css.wrapper}>
          <Title
            styles={{ fontSize: "2rem" }}
            tagName="h1"
            title="Hi, I'm Max"
          />
          <Title
            styles={{ fontSize: "1.4rem" }}
            tagName="h2"
            title="a novice frontend developer"
          />
          <p className={css.subtitlePassion}>
            with passion for learning and creating websites
          </p>
        </div>
      </header>

      <div className={css.skills}>
        <div className={css.wrapper}>
          <Title
            styles={{ fontSize: "1.4rem" }}
            tagName="h2"
            title="Frontend skills"
          />
          <ul className={css.mySkillsList}>{mySkillsItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
