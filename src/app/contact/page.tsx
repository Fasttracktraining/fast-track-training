import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-ft-blue text-center mb-12">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-ft-blue mb-6">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-ft-blue">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-bold uppercase">Phone</div>
                                    <div className="text-lg font-medium">0115 837 6502</div>
                                    <div className="text-lg font-medium">07523 678 891</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-ft-red">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-bold uppercase">Email</div>
                                    <div className="text-lg font-medium">contact@fasttracklifeuk.co.uk</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-bold uppercase">Address</div>
                                    <div className="text-lg font-medium">
                                        Nottingham, United Kingdom<br />
                                        (Online Tuition Worldwide)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map or Form Placeholder */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-ft-blue mb-6">Send a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                                <input type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ft-blue outline-none" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                                <input type="email" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ft-blue outline-none" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                                <textarea className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ft-blue outline-none h-32" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-ft-blue text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
