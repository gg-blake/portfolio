export default function ColorBlendButton({children="", className="", href="", target="", rel=""}: {children?: string, className?: string, href?: string, target?: string, rel?: string}) {
    return (
        <a className={`overflow-clip w-auto h-auto py-2 px-2 flex items-center justify-center bg-black bottom-3 border-[1px] border-white text-white group ${className}`} href={href} target={target} rel={rel}><div className="absolute group-hover:bottom-0 bottom-[100%] left-0 w-full h-full mix-blend-difference bg-white transition-all"></div>{children}</a>
    )
}