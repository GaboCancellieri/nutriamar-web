import { Icon, Shape, Typography } from "@ccomponents";
import { PRIMARY_LIGHT } from "@constants/colors";
import { DOSIS } from "@constants/fonts";
import { SHAPE_BUBBLE } from "@constants/shapes";
import React, { LegacyRef } from "react";
import { CONTACT_ME_LINKS, CONTACT_ME_TITLE } from "./constants";
import styles from "./contactMe.module.scss";

const ContactMe = React.forwardRef(({}, ref) => {
  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
      className={styles.contactMeContainer}
    >
      <Typography size={24}>{CONTACT_ME_TITLE}</Typography>
      <div className={styles.contactLinksContainer}>
        {CONTACT_ME_LINKS.map((link, index) => {
          return (
            <a
              href={link.url}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.contactLinkContent}>
                <Shape
                  key={index}
                  width={105}
                  height={105}
                  type={SHAPE_BUBBLE}
                  color={PRIMARY_LIGHT}
                >
                  <Icon
                    iconId={link.iconId}
                    iconDesign={link.iconDesign}
                    size="4x"
                  />
                </Shape>
                <Typography size={21} fontFamily={DOSIS}>
                  {link.title}
                </Typography>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
});

export default ContactMe;
