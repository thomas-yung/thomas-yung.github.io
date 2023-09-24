import * as React from "react";
import { Section } from "../common/section/Section";
import { TextLink, TextWithLinks } from "../common/text/TextWithLinks";

export const LinksAndContactSection: React.FC = () => {
    return (
        <Section 
            title={"Links and Contact"}
            body={<LinksAndContactSectionContent />}
            linkToHome={true}
        />
    );
}

const LinksAndContactSectionContent: React.FC = () => {
    return (
        <ul>
            <li>
                <TextWithLinks
                    content={(
                        <>
                            For anything work related, the best way to reach me is
                            <TextLink
                                text={"via LinkedIn"}
                                url={"https://www.linkedin.com/in/thomas-yung-42216b13a"}
                            />
                        </>
                    )}
                />
            </li>
            <li>
                <TextWithLinks
                    content={(
                        <>
                            For everything else,
                            <TextLink
                                text={"Instagram is the place"}
                                url={"https://www.instagram.com/thomasyung_"}
                            />
                        </>
                    )}
                />
            </li>
        </ul>
    )
}
