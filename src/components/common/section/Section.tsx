import * as React from "react";
import css from "./Section.module.scss"
import { useHome } from "../../../hooks/useHome";

interface ISectionProps {
    title: string;
    body: React.ReactNode;
    /**
     * true iff a button directing to home section should be shown
     * @default false
     */
    linkToHome?: boolean;
    /**
     * 
     */
    backgroundImg?: string;
}

export const Section: React.FC<ISectionProps> = ({ title, body, linkToHome = false, backgroundImg }) => {
    const backgroundStyles = backgroundImg != null 
    ? {
        backgroundImage: `url(${backgroundImg})`,
    }
    : {};

    return (
        <div className={css.section}>
            {backgroundImg && <div className={css.background} style={backgroundStyles} />}
                {linkToHome && <ReturnToHomeButton />}
            <div className={css.inner}>
            {/* <div className={css.inner} style={backgroundStyles}> */}
                <h2 className={css.title}>{title}</h2>
                <div className={css.body}>{body}</div>
                {backgroundImg && (
                    <div className={css.footer}>
                        <span className={css.text}>
                            Artwork by Louisa Yung
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

const ReturnToHomeButton: React.FC = () => {
    const { scrollToHome } = useHome();

    return (
        <button className={css.returnToHome} onClick={scrollToHome}>
            Return to home
        </button>
    )
}