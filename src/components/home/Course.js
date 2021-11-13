import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { TriangleSvg, CircleSvg } from "./svg";

const StyledRouteSection = styled.section`
  width: 100%;
  background-color: var(--primary-light);
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px 0px;
    .section-title {
      color: var(--primary-navy);
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
    border: 1px solid var(--primary-dark);
    margin-bottom: 24px;
    position: relative;
    .route-image-deco-triangle {
      position: absolute;
      right: 216px;
      top: -8px;
    }
    .route-image-deco-circle {
      position: absolute;
      left: 206px;
      bottom: -16px;
    }
  }
  .route-name {
    color: var(--primary-dark);
    margin: 0 auto;
    text-align: center;
    width: 80%;
    font-weight: 700;
    font-size: 24px;
  }
`;

const Course = () => {
  const {
    allStrapiCourses: { nodes: courses },
  } = useStaticQuery(query);
  return (
    <StyledRouteSection id="route">
      <div className="inner">
        <h2 className="section-title">CÁC KHÓA HỌC TẠI PATHWAY EDUCATION</h2>
        <ul className="route-list">
          {courses.map((course) => (
            <StyledRouteItem key={course.strapiId}>
              <div className="route-image-wrapper">
                <TriangleSvg className="route-image-deco-triangle" />
                <CircleSvg className="route-image-deco-circle" />
              </div>
              <div className="route-name">{course.name}</div>
            </StyledRouteItem>
          ))}
        </ul>
      </div>
    </StyledRouteSection>
  );
};

export const query = graphql`
  {
    allStrapiCourses(limit: 4) {
      nodes {
        name
        strapiId
      }
    }
  }
`;

export default Course;
