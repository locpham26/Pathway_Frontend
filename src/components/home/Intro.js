import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { EnvironmentSvg, KnowledgeSvg, CommunitySvg } from "./svg";
import { graphql, useStaticQuery } from "gatsby";

const StyledIntroSection = styled.section`
  width: 80%;
  max-width: 1800px;
  margin: 0 auto;
  margin-bottom: 96px;
  .inner {
    display: flex;
    gap: 64px;
    align-items: center;
    .inner-left {
      flex: 1 1 50%;
      .inner-left-text {
        font-weight: 700;
        font-size: 32px;
        text-align: center;
        color: var(--primary-navy);
        margin-bottom: 48px;
      }
      .inner-left-image-wrapper {
        border-radius: 100px;
        position: relative;
        .inner-left-image {
          border-radius: inherit;
        }
        &::before {
          content: "";
          position: absolute;
          border-radius: inherit;
          width: 100%;
          height: 100%;
          right: 24px;
          background-color: var(--primary-teal);
        }
      }
    }
    .inner-right {
      flex: 1 1 50%;
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 48px;
      }
    }
  }
`;

const StyledReasonItem = styled.li`
  max-width: 80%;
  .reason-icon-name-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    .reason-name {
      font-weight: 700;
      color: var(--primary-navy);
      font-size: 28px;
    }
    .reason-icon {
      margin-right: 24px;
    }
  }

  .reason-desc {
    font-weight: 500;
    font-size: 20px;
    color: var(--primary-navy);
    text-align: center;
  }
`;

const icons = [<CommunitySvg />, <KnowledgeSvg />, <EnvironmentSvg />];

const Intro = () => {
  const {
    allStrapiReason: { nodes },
  } = useStaticQuery(query);
  return (
    <StyledIntroSection id="intro">
      <div className="inner">
        <div className="inner-left">
          <h2 className="inner-left-text">
            VÌ SAO BẠN NÊN LỰA CHỌN PATHWAY EDUCATION ?
          </h2>
          <div className="inner-left-image-wrapper">
            <StaticImage
              className="inner-left-image"
              src="../../images/intro.jpeg"
              alt="a man coding in the cafeteria"
            />
          </div>
        </div>
        <div className="inner-right">
          <ul>
            {nodes[0].reasons.map((reason, index) => (
              <StyledReasonItem key={reason.name}>
                <div className="reason-icon-name-wrapper">
                  <div className="reason-icon">{icons[index]}</div>
                  <div className="reason-name">{reason.name}</div>
                </div>
                <p className="reason-desc">{reason.description}</p>
                <div></div>
              </StyledReasonItem>
            ))}
          </ul>
        </div>
      </div>
    </StyledIntroSection>
  );
};

export const query = graphql`
  {
    allStrapiReason {
      nodes {
        reasons {
          name
          description
        }
      }
    }
  }
`;

export default Intro;
