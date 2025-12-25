export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-md w-full text-center">
                <h1 className="text-3xl font-extrabold text-ft-blue mb-6">Student Login</h1>
                <p className="text-slate-500 mb-8">Please sign in to access your course materials.</p>

                <form className="space-y-4 text-left">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                        <input type="email" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ft-blue outline-none" placeholder="name@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Password</label>
                        <input type="password" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ft-blue outline-none" placeholder="••••••••" />
                    </div>
                    <button type="button" className="w-full bg-ft-red text-white font-bold py-3 rounded-lg hover:bg-red-700 transition shadow-lg mt-4">
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-sm text-slate-400">
                    Don't have an account? <a href="/register" className="text-ft-blue font-bold hover:underline">Register here</a>
                </div>
            </div>
        </div>
    )
}
