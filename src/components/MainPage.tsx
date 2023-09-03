import * as React from "react";
import { HomeContextProvider } from "../hooks/useHome";
import { withRef } from "../utils/withRef";
import { AboutSection } from "./about/AboutSection";
import { HomeSection } from "./home/HomeSection";
import { LinksAndContactSection } from "./linksAndContact/LinksAndContactSection";
import css from "./MainPage.module.scss";
import { WorkSection } from "./work/WorkSection";

export const MainPage: React.FC = () => {

    const sections = useSections();

    return (
        <HomeContextProvider children={(
        <>
            <div className={css.page}>
                <HomeSection options={sections} />
                {sections.map(({ title, content }) => (
                    <div key={title}>
                        {content}
                    </div>
                ))}
            </div>
            </>
        )}
         />
    );
}

/**
 * Create array of sections which get rendered here + passed to Menu
 */

const useSections = () => {
    const handleScrollToRef = React.useCallback((ref: React.RefObject<HTMLDivElement>) => () => ref.current?.scrollIntoView({behavior: 'smooth'}), []);

    const aboutRef = React.useRef<HTMLDivElement>(null);
    const workRef = React.useRef<HTMLDivElement>(null);
    const linksAndContactRef = React.useRef<HTMLDivElement>(null);

    return React.useMemo(() => ([
        {
            title: "About",
            content: withRef(<AboutSection />, aboutRef),
            onScrollTo: handleScrollToRef(aboutRef),
        },
        {
            title: "Work",
            content: withRef(<WorkSection />, workRef),
            onScrollTo: handleScrollToRef(workRef),
        },
        {
            title: "Links and Contact",
            content: withRef(<LinksAndContactSection />, linksAndContactRef),
            onScrollTo: handleScrollToRef(linksAndContactRef),
        },
    ]), [handleScrollToRef, aboutRef, workRef, linksAndContactRef]);
}
