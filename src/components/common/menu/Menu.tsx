import * as React from "react";
import css from "./Menu.module.scss";

type IMenuOption = {
    title: string;
    onScrollTo: () => void;
}

export interface IMenuProps {
    options: IMenuOption[];
}

export const Menu: React.FC<IMenuProps> = ({ options }) => {
    return (
        <div className={css.menu}>
            {options.map((option, idx) => (
                <MenuItem key={`opt@${idx}`} item={option} />
            ))}
        </div>
    );
}

interface IMenuItemProps {
    item: IMenuOption;
}

export const MenuItem: React.FC<IMenuItemProps> = ({ item }) => {
    const { title, onScrollTo } = item;

    return (
        <button className={css.menuItem} onClick={onScrollTo}>
            {title}
        </button>
    );
}