import * as React from "react";
import { Section } from "../common/section/Section";
import { TextLink, TextWithLinks } from "../common/text/TextWithLinks";

export const AboutSection: React.FC = () => {
    return (
        <Section 
            title={"About"}
            body={<AboutSectionBody />}
            linkToHome={true}
        />
    );
}

const AboutSectionBody: React.FC = () => {
    return (
        <div>
            <p>
                Hello, world! I'm Tom 👋<br />
                <br />
                Here's a bunch of random facts about me:
                <ul>
                    <li>
                        I grew up in Manchester but have lived in London since I moved here for university
                    </li>
                    <li>
                        <TextWithLinks
                            content={(
                                <>
                                    Music is a big part of my life - you can see what I've been listening to 
                                    <TextLink
                                        text={"on my last.fm"}
                                        url={"https://last.fm/user/thomasyung_"}
                                    />
                                </>
                            )}
                        />
                    </li>
                    <li>
                        <TextWithLinks
                            content={(
                                <>
                                    I love to travel and I love to eat - I've been trying to write-up trips I've been
                                    <TextLink
                                        text={"on my blog (hosted on Notion)"}
                                        url={"https://thomasyung.notion.site/Blog-f2880117b75d4e3db4817dfb2bd18e22"}
                                    />
                                </>
                            )}
                        />
                    </li>
                </ul>
            </p>
        </div>
    );
}