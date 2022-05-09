import React from "react";
import { Row } from "react-bootstrap";

import WebApp from "./WebApp";
import TransitionPage from "../UI/TransitionPage";

import portfolioSiteImg from "../../images/web-images/portfolioSite.png";
import myOctagoImg from "../../images/web-images/myOctago.png";
import superMealsImg from "../../images/web-images/supermeals.png";
import reduxCartImg from "../../images/web-images/reduxCart.png";
import expenSnapImg from "../../images/web-images/expenSnap.png";
import toDoDatabaseImg from "../../images/web-images/toDoDatabase.png";
import quoteMonkeyImg from "../../images/web-images/quoteMonkey.png";
import toDoDatabaseTSImg from "../../images/web-images/typescript-todo.png";

const Portfolio = () => {
  const portfolioSiteApp = {
    title: "This Website",
    description: "Of course!",
    build: "Built with React",
    gitLink: "",
    appLink: "http://daniel-pisterzi.web.app",
    img: portfolioSiteImg,
    moreInfo:
      "This site was built from the ground-up to organize my portfolio in an intuitive way.",
  };

  const myOctagoApp = {
    title: "myOctago Website",
    description: "Fully functioning website for my eCommerce business.",
    build: "Built with wooCommerce",
    gitLink: "",
    appLink: "http://daniel-pisterzi.web.app",
    img: myOctagoImg,
    moreInfo:
      "A website fully built with wooCommerce. Integrates with Stripe, automated delivery services, and more. All creatives, photography, video were all done by me.",
  };

  const reduxCartApp = {
    title: "Redux Cart",
    description: "Redux persistent cart with UI feedback for cart additions.",
    build: "Built with React, Redux",
    gitLink: "",
    appLink: "http://pisterzi-reduxcart.web.app",
    img: reduxCartImg,
    moreInfo:
      "This react app was built using redux for an app-wide state. It has a persistent cart in local storage and integrates with a Firebase database.",
  };

  const superMealsApp = {
    title: "Super Meals!",
    description: "Food for superheroes, made by super villains.",
    build: "Built with React",
    gitLink: "https://github.com/DEFIdaniel1/super-meals",
    appLink: "https://super-meals.web.app/",
    img: superMealsImg,
    moreInfo:
      "A restaurant app to order menu items that connects with Firebase via API. Fully functioning form logic with validation and user feedback built in.",
  };

  const expenSnapApp = {
    title: "ExpenSnap",
    description: "Like SnapChat for your expenses.",
    build: "Built with React",
    gitLink: "https://github.com/DEFIdaniel1/expensnap",
    appLink: "http://expensnap.web.app",
    img: expenSnapImg,
    moreInfo:
      "Add expense items and filter by year. This data feeds into the bar graph based on expense-by-month. Not persistent - refreshes on reload.",
  };

  const toDoDatabaseApp = {
    title: "To Do Database!",
    description: "Your to do list saved to the cloud.",
    build: "Built with React",
    gitLink: "https://github.com/DEFIdaniel1/tasks-database",
    appLink: "https://pisterzi-todo.web.app",
    img: toDoDatabaseImg,
    moreInfo:
      "Add to do items to an ongoing list. All items will save to a Firebase backend via API.",
  };

  const quoteMonkeyApp = {
    title: "Quote Monkey",
    description: "Comment on inspirational quotes or add your own!",
    build: "Built with React, React Router",
    gitLink: "https://github.com/DEFIdaniel1/quote-monkey",
    appLink: "https://pisterzi-quote.web.app/quotes",
    img: quoteMonkeyImg,
    moreInfo:
      "React-router-based app that uses lazy-loading and loading spinners between state. Quotes and comments are saved and retrieved via Firebase API.",
  };

  const toDoDatabaseTS = {
    title: "Typescript Database",
    description: "Your go-to to-do app.",
    build: "Built with React, TypeScript",
    gitLink: "https://github.com/DEFIdaniel1/typescript-app",
    appLink: "https://pisterzi-typescript-db",
    img: toDoDatabaseTSImg,
    moreInfo:
      "A todo app built with TypeScript and react. Ties into Firebase database via API.",
  };

  return (
    <>
      <TransitionPage title="A few things I've worked on..." />
      <section className="white-section text-center">
        <section className="section">
          <h1>Portfolio</h1>
          <Row>
            <WebApp app={superMealsApp} />
            <WebApp app={quoteMonkeyApp} />
            <WebApp app={portfolioSiteApp} />
            <WebApp app={myOctagoApp} />
            <WebApp app={toDoDatabaseApp} />
            <WebApp app={toDoDatabaseTS} />
            <WebApp app={reduxCartApp} />
            <WebApp app={expenSnapApp} />
          </Row>
        </section>
        <section className="section">
          <h3>Coming soon....</h3>
          <h4>Blockchain dApps</h4>
        </section>
      </section>
    </>
  );
};

export default Portfolio;
