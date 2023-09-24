import * as React from "react";
import { useHome } from "../../hooks/useHome";
import { withRef } from "../../utils/withRef";
import { IMenuProps } from "../common/menu/Menu";
import { Menu } from "../common/menu/Menu";
import { Section } from "../common/section/Section";
import background from "./img/background.png";
import instagram from "./img/instagram.svg";
import linkedin from "./img/linkedin.svg";
import css from "./HomeSection.module.scss";

interface IHomeSectionProps extends IMenuProps { }

export const HomeSection: React.FC<IHomeSectionProps> = props => {
    const { ref } = useHome();

    return withRef((
        <Section 
            title={"Thomas Yung"}
            body={<HomeSectionContent {...props} />}
            backgroundImg={background}
        />
    ), ref);
}

const HomeSectionContent: React.FC<IHomeSectionProps> = props => {
    return (
        <div className={css.homeContent}>
            <div className={css.menuWrapper}>
                <Menu {...props} />
            </div>

            <div className={css.divider} />

            <a
                className={css.link}
                href={"https://thomasyung.notion.site/Blog-f2880117b75d4e3db4817dfb2bd18e22"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >
                My Notion blog (external link)
            </a>

            <div className={css.divider} />

            <div className={css.socialLinks}>
                <SocialLink icon={instagram} url={"https://www.instagram.com/thomasyung_"} alt={"Instagram icon"} />
                <SocialLink icon={linkedin} url={"https://www.linkedin.com/in/thomas-yung-42216b13a"} alt={"LinkedIn icon"} />
            </div>
        </div>
    );
}

interface ISocialLinkProps {
    icon: string;
    url: string;
    alt: string;
}

const SocialLink: React.FC<ISocialLinkProps> = ({ icon, url, alt }) => {
    return (
        <a
            href={url}
            target={"_blank"}
            rel={"noopener noreferrer"}
        >
            <img className={css.icon} src={icon} alt={alt} />
        </a>
    )
}