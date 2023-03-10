import MyLink from "../ui/MyLink/MyLink";
import css from "./About.module.scss";

const About = () => {
  const contacts = [
    { link: "tel:8-916-716-47-00", children: "Phone" },
    { link: "https://t.me/+79167164700", children: "Telegram" },
    { link: "https://wa.me/+79167164700", children: "WhatsApp" },
  ];

  const contactsItem = contacts.map(({ link, children }) => (
    <li key={children} className={css.linkItem}>
      <MyLink link={link}>{children}</MyLink>
    </li>
  ));

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
        <ul className={css.linkList}>{contactsItem}</ul>
      </div>
    </div>
  );
};

export default About;
