import React from "react";
import { Image, Typography } from "@ccomponents";
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
}: SectionProps) => {
  const { image, title, subtitle, description } = section;
  const isInverted = index % 2 === 1 && enableInversion;
  const textClass = isInverted
    ? styles.textSectionInverted
    : styles.textSection;
  const marginX = isInverted
    ? { marginRight: columnMargin }
    : { marginLeft: columnMargin };
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.section}>
        {!isInverted && image && (
          <Image
            url={image.url}
            altText={image.altText}
            width={image.width}
            height={image.height}
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
          />
        )}
      </div>
      <div className={styles.linksContainer}>
        {section.links?.map((link, index) => {
          return <SectionLinkItem key={index} link={link} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Section;
