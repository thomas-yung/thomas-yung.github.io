import * as React from "react";

type IHomeContext = {
    ref: React.RefObject<HTMLDivElement> | undefined;
    scrollToHome: () => void;
}

const HomeContext = React.createContext<IHomeContext>({ ref: undefined, scrollToHome: () => {} });

export const HomeContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const scrollToHome =  React.useCallback(() => ref.current?.scrollIntoView({behavior: 'smooth'}), [ref]);
    return <HomeContext.Provider value={{ ref, scrollToHome }}>{children}</HomeContext.Provider>
}

export const useHome = () => React.useContext(HomeContext);