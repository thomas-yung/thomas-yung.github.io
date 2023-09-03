import * as React from "react";
import { Section } from "../common/section/Section";
import { TextLink } from "../common/text/TextWithLinks";
import { TextWithLinks } from "../common/text/TextWithLinks";

export const WorkSection: React.FC = () => {
    return (
        <Section 
            title={"Work"}
            body={<WorkSectionBody />}
            linkToHome={true}
        />
    );
}

const WorkSectionBody: React.FC = () => {
    return (
        <div>
            <p>
                I am a full stack software engineer with a First class degree from Imperial College London (graduated 2020).<br />
                I work at Palantir (joined 2022) as a product software engineer and have worked at Improbable (2020 - 2022) 
                and Moore Capital in the past.<br />
                <br />
                <i>Solving the problem</i> is most interesting to me and I will use whatever tools are best for the job, rather than
                sticking to what I know.
            </p>
            <TextWithLinks
                content={(
                    <>
                        You can find the most up-to-date career information
                        <TextLink
                            url={"https://drive.google.com/file/d/1iUfLsJz8YEqU7fhagFJOm5CDZPhfTjW1/view"}
                            text={"on my resume (Google Drive link)"}
                        />.
                    </>
               )}
            />
        </div>
    )
}