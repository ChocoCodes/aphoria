import { type ReactNode } from "react";

const Button = ({children, href}: {children: ReactNode, href: string}) => {
    return (
        <button className="font-roma text-white text-center text-[1rem] lg:text-[2rem] py-4 px-8 border-1 border-white rounded-3xl hover:bg-white/10 transition-colors duration-300 hover:cursor-pointer">
            <a href={href}>{children}</a>
        </button>
    );
};

export default Button;