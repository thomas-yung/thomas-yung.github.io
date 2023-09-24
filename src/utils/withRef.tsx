import * as React from "react";

export const withRef = (content: React.ReactNode, ref: React.RefObject<HTMLDivElement> | undefined) => <div ref={ref}>{content}</div>;
