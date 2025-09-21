import { type ReactNode } from "react";

const Button = ({children, href}: {children: ReactNode, href: string}) => {
    return (
        <a href={href} className="font-roma text-white text-center text-[1rem] lg:text-[1.5rem] py-4 px-8 border-1 border-white rounded-3xl hover:bg-white/10 transition-colors duration-300">
            {children}
        </a>
    );
};

export default Button;