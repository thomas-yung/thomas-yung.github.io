import * as React from "react"
import css from "./TextWithLinks.module.scss";

interface ITextWithLinksProps {
    content: React.ReactNode;
}

export const TextWithLinks: React.FC<ITextWithLinksProps> = ({ content }) => {
    return (
        <div className={css.text}>
            {content}
        </div>
    )
}

interface ITextLinkProps {
    url: string;
    text: string;
}

export const TextLink: React.FC<ITextLinkProps> = ({ url, text }) => {
    return (
        <a
            className={css.link}
            href={url}
            target={"_blank"}
            rel={"noopener noreferrer"}
        >
            {text}
        </a>
    );
} 