import React from "react";
import {
  IFrame,
  Image,
  ScrollAnimationWrapper,
  Typography,
} from "@ccomponents";
import { SectionProps } from "./types";
import styles from "./section.module.scss";
import classNames from "classnames";
import SectionLinkItem from "./SectionLinkItem/SectionLinkItem";
const Section = ({
  section,
  textSectionClass,
  index,
  enableInversion = true,
  columnMargin = "7rem",
  enableScrollAnimation = false,
  enableSectionEdit = false,
  onEditIFrame = () => {},
  onEditImage = () => {},
}: SectionProps) => {
  console.log({ section });
  const { image, title, subtitle, description, iframe } = section;
  const isInverted = index % 2 === 1 && enableInversion;
  const textClass = isInverted
    ? styles.textSectionInverted
    : styles.textSection;
  const marginX = isInverted
    ? { marginRight: columnMargin }
    : { marginLeft: columnMargin };

  return (
    <ScrollAnimationWrapper
      effectDirection={"horizontal"}
      effectValue={isInverted ? -30 : 30}
      disabled={!enableScrollAnimation}
    >
      <div className={styles.sectionContainer}>
        <div className={styles.section}>
          {!isInverted && image && (
            <Image
              url={image.url}
              altText={image.altText}
              width={image.width}
              height={image.height}
              enableEdit={enableSectionEdit}
              onEdit={() => onEditImage(index)}
            />
          )}
          {!isInverted && iframe && (
            <IFrame
              url={iframe.url}
              background={iframe.background}
              enableEdit={enableSectionEdit}
              onEdit={() => onEditIFrame(index)}
            />
          )}
          <div
            className={classNames(textClass, textSectionClass)}
            style={marginX}
          >
            <Typography
              className={title.classname}
              align={title.align}
              color={title.color}
              size={title.size}
              textTransform={title.textTransform}
              fontFamily={title.fontFamily}
              enableEdit={enableSectionEdit}
              maxHeight="23px"
            >
              {title.text}
            </Typography>
            <Typography
              className={subtitle?.classname}
              align={subtitle?.align}
              color={subtitle?.color}
              size={subtitle?.size}
              textTransform={subtitle?.textTransform}
              fontFamily={subtitle?.fontFamily}
              enableEdit={enableSectionEdit}
              maxHeight="23px"
            >
              {subtitle?.text}
            </Typography>
            <Typography
              className={description?.classname}
              align={description?.align}
              color={description?.color}
              size={description?.size}
              textTransform={description?.textTransform}
              fontFamily={description?.fontFamily}
              enableEdit={enableSectionEdit}
              maxHeight="168px"
            >
              {section.description?.text}
            </Typography>
          </div>
          {isInverted && image && (
            <Image
              url={image.url}
              altText={image.altText}
              width={image.width}
              height={image.height}
              enableEdit={enableSectionEdit}
              onEdit={() => onEditImage(index)}
            />
          )}
          {isInverted && iframe && (
            <IFrame
              url={iframe.url}
              background={iframe.background}
              enableEdit={enableSectionEdit}
              onEdit={() => onEditIFrame(index)}
            />
          )}
        </div>
        <div className={styles.linksContainer}>
          {section.links?.map((link, index) => {
            return <SectionLinkItem key={index} link={link} index={index} />;
          })}
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
};

export default Section;
