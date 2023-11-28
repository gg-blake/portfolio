export default function Contact() {
    return (
        <div className="w-full h-auto p-3">
            <p className="text-base p-0 m-0">I'm always happy to have a chat. For all inquiries, please contact blake@moody.mx directly or fill out the form below.</p>
            <form className="w-full h-auto p-3">
                <div className="w-full h-auto">
                    <label className="text-base p-0 m-0">Name</label>
                    <input className="w-full h-10 p-3 border border-white bg-black focus:outline-none focus:border-black focus:border-b-white" type="text" placeholder="John Doe" />
                </div>
                <div className="w-full h-auto">
                    <label className="text-base p-0 m-0">Email</label>
                    <input className="w-full h-10 p-3 border border-white bg-black focus:outline-none focus:border-black focus:border-b-white" type="email" placeholder="email" />
                    </div>
                <div className="w-full h-auto">
                    <label className="text-base p-0 m-0">Message</label>
                    <textarea className="w-full h-32 p-3 border border-white bg-black text-white focus:outline-none focus:border-black focus:border-b-white" placeholder="Your message"></textarea>
                </div>
                <div className="w-full h-auto">
                    <button className="w-full h-10 p-3 bg-indigo-500 hover:bg-indigo-300 rounded-lg text-white">Send</button>
                    </div>
            </form>
        </div>
    )
}