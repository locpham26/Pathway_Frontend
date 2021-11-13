import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const StyledRouteSection = styled.section`
  width: 100%;
  background-color: var(--primary-navy);
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px 0px;
    .section-title {
      color: white;
      font-weight: 700;
      font-size: 32px;
      margin-bottom: 48px;
    }
    .route-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 64px;
    }
  }
`;

const StyledRouteItem = styled.li`
  width: 240px;
  .route-image-wrapper {
    width: 240px;
    height: 240px;
    border-radius: 40px;
    background-color: var(--primary-yellow);
    margin-bottom: 24px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      right: 24px;
      width: 100%;
      height: 100%;
      border-radius: 40px;
      background-color: var(--primary-dark);
    }
  }
  .route-name {
    color: var(--primary-light);
    margin: 0 auto;
    text-align: center;
    width: 80%;
    font-weight: 700;
    font-size: 24px;
  }
`;

const Route = () => {
  const {
    allStrapiRoutes: { nodes: routes },
  } = useStaticQuery(query);
  return (
    <StyledRouteSection id="route">
      <div className="inner">
        <h2 className="section-title">
          CÁC LỘ TRÌNH HỌC TẠI PATHWAY EDUCATION
        </h2>
        <ul className="route-list">
          {routes.map((route) => (
            <StyledRouteItem key={route.strapiId}>
              <div className="route-image-wrapper"></div>
              <div className="route-name">{route.name}</div>
            </StyledRouteItem>
          ))}
        </ul>
      </div>
    </StyledRouteSection>
  );
};

export const query = graphql`
  {
    allStrapiRoutes(limit: 4) {
      nodes {
        name
        strapiId
      }
    }
  }
`;

export default Route;
