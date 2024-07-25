import GlitchTitle from './glitch_text';
import { MovingBannerFrame } from './moving_banner';

export default function Contact() {
    return (
        <div className="w-screen h-screen p-3 relative">
            <div className="sticky top-[calc(70px+.75rem)] p-3 border-white border-[1px] box-border z-[900] bg-black">
                <GlitchTitle>Contact</GlitchTitle>
            </div>
            <form className="w-full h-auto flex flex-col gap-3 mt-3">
                <div className="w-full max-w-[400px] h-auto">
                    <label className="text-xl font-semibold p-0 m-0">Name</label>
                    <input className=" mt-1 w-full h-10 p-3 border border-white bg-black focus:outline-none focus:border-black focus:border-b-white" type="text" />
                </div>
                <div className="w-full max-w-[400px] h-auto">
                    <label className="text-xl font-semibold p-0 m-0">Email</label>
                    <input className="mt-1 w-full h-10 p-3 border border-white bg-black focus:outline-none focus:border-black focus:border-b-white" type="email" />
                    </div>
                <div className="w-full max-w-[400px] h-auto">
                    <label className="text-xl font-semibold p-0 m-0">Message</label>
                    <textarea className="mt-1 w-full h-auto p-3 border border-white bg-black text-white focus:outline-none focus:border-black focus:border-b-white"></textarea>
                </div>
                <div className="w-[100px] max-w-full h-auto">
                    <button className="w-full h-10 p-3 border-white border-[1px] flex items-center justify-center underline text-white">Send</button>
                    </div>
            </form>
        </div>
    )
}