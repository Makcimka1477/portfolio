import css from "./About.module.scss";

const About = () => {
  return (
    <div className={css.about}>
      <div className={css.wrapper}>
        <h3 className={css.title}>Title</h3>
        <p className={css.aboutText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque in
          recusandae magni quo blanditiis placeat at ipsum ut suscipit rem hic
          nemo vitae maiores vel reprehenderit omnis voluptate, quia corrupti?
        </p>
      </div>

      <div className={css.contacts}>
        <h4 className={css.title}>Contacts:</h4>
        <div className={css.links}>
          <a className={css.link} href="tel:8-916-716-47-00">
            Phone: 8-916-716-47-00
          </a>
          <a className={css.link} href="https://t.me/+79167164700">
            Telegram
          </a>
          <a className={css.link} href="https://wa.me/+79167164700">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
