import React from "react";
import styled from "styled-components";
import { HeroSvg, BagSvg, PendulumSvg } from "./svg";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const StyledHeroSection = styled.section`
  min-height: 100vh;
  width: 100%;
  margin-bottom: 96px;
  background-color: var(--primary-yellow);
  display: flex;
  align-items: center;
  .hero-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 64px;
    width: 75%;
    margin: auto;
    height: 600px;
  }
`;

const StyledHeroInfo = styled.div`
  width: 40%;
  gap: 64px;
  .title {
    font-size: 28px;
    font-weight: 700;
    color: var(--primary-navy);
    margin-bottom: 48px;
  }
  .subtitle {
    font-size: 20px;
    font-weight: 500;
    color: var(--primary-navy);
  }
  .cta-button {
    border-radius: 10px;
    padding: 16px 24px;
    border: none;
    outline: none;
    background-color: var(--primary-navy);
    color: var(--primary-yellow);
    font-size: 20px;
    cursor: pointer;
  }
`;

const StyledHeroImage = styled.div`
  width: 818px;
  height: 460px;
  border-radius: 90px;
  border: 8px solid var(--primary-teal);
  background: linear-gradient(0deg, #ffffff, #ffffff);
  position: relative;
  .hero-bag-image {
    position: absolute;
    top: 75%;
    left: -5%;
  }
  .hero-pendulum-image {
    position: absolute;
    bottom: 85%;
    right: -3%;
  }
  .hero-image-inner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: flex-end;
    .hero-image {
      position: absolute;
      bottom: -40px;
      z-index: 3;
    }
  }
`;

const Hero = () => {
  const {
    allStrapiIntro: { nodes: intro },
  } = useStaticQuery(query);
  return (
    <StyledHeroSection>
      <div className="hero-inner">
        <StyledHeroInfo>
          <h1 className="title">{intro[0].title}</h1>
          <h6 className="subtitle">{intro[0].subtitle}</h6>
          <button className="cta-button">Tìm hiểu thêm</button>
        </StyledHeroInfo>
        <StyledHeroImage>
          <BagSvg className="hero-bag-image" />
          <PendulumSvg className="hero-pendulum-image" />
          <div className="hero-image-inner">
            <HeroSvg className="hero-image" />
          </div>
        </StyledHeroImage>
      </div>
    </StyledHeroSection>
  );
};

export default Hero;

export const query = graphql`
  {
    allStrapiIntro {
      nodes {
        title
        subtitle
      }
    }
  }
`;
