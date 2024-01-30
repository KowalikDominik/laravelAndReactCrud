import { Link } from "react-router-dom";

export default function Nav({ children, mobile }) {
    if (mobile) {
        return <nav className="flex flex-col pt-4">{children}</nav>;
    }

    return (
        <nav className="text-white text-base font-semibold pt-3">
            {children}
        </nav>
    );
}

const BaseNavItem = (props) => {
    const iconCls = `fas mr-3 ${props.iconName}`;
    const cls = `flex items-center active:bg-violet-950 text-white nav-item ${props.className}`;
    return (
        <Link to={props.to} className={cls}>
            <i className={iconCls}></i>
            {props.text}
        </Link>
    );
};

const NavItem = ({ children, ...props }) => {
    const cls = `py-4 pl-6`;
    return (
        <BaseNavItem className={cls} {...props}>
            {children}
        </BaseNavItem>
    );
};

const MobileNavItem = ({ children, ...props }) => {
    const cls = `py-2 pl-4`;
    return (
        <BaseNavItem className={cls} {...props}>
            {children}
        </BaseNavItem>
    );
};

Nav.MobileNavItem = MobileNavItem;
Nav.NavItem = NavItem;
