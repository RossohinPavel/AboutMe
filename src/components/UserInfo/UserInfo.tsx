import EmailIcon from "../../assets/icon-email.svg?react";
import LocationIcon from "../../assets/icon-location.svg?react";
import WebsiteIcon from "../../assets/icon-website.svg?react";
import { useAppContext } from "../../contexts/App/context";
import { InfoItem, type InfoItemProps } from "../InfoItem/InfoItem";
import styles from "./UserInfo.module.scss";


export function UserInfo() {
  const { me } = useAppContext();

  const items: InfoItemProps[] = [
    { icon: <LocationIcon />, text: me?.location },
    { icon: <WebsiteIcon />, text: me?.blog, isLink: true },
    { icon: <EmailIcon width="20" height="20"/>, text: me?.email },
  ];

  return (
    <div className={styles["user-info"]}>
      {items.map((item, index) => <InfoItem key={index} {...item}/>)}
    </div>
  );
}