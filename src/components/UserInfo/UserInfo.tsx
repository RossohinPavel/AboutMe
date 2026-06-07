import CompanyIcon from "../../assets/icon-company.svg";
import LocationIcon from "../../assets/icon-location.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import WebsiteIcon from "../../assets/icon-website.svg";
import { useAppContext } from "../../contexts/App/context";
import { InfoItem, type InfoItemProps } from "../InfoItem/InfoItem";
import styles from "./UserInfo.module.scss";


export function UserInfo() {
  const { me } = useAppContext();

  const items: InfoItemProps[] = [
    { icon: LocationIcon,text: me?.location },
    { icon: WebsiteIcon, text: me?.blog, isLink: true },
    { icon: TwitterIcon, text: me?.twitter_username },
    { icon: CompanyIcon, text: me?.company },
  ];

  return (
    <div className={styles["user-info"]}>
      {items.map((item, index) => <InfoItem key={index} {...item}/>)}
    </div>
  );
}