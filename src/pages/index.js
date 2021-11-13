import React from "react";
import Layout from "../components/core/Layout";
import Course from "../components/home/Course";
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import Registration from "../components/home/Registration";
import Route from "../components/home/Route";

const IndexPage = ({ location }) => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Route />
      <Course />
      <Registration />
    </Layout>
  );
};

export default IndexPage;
