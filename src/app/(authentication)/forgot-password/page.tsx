export default function ForgotPasswordPage() {
    return (
        <>
            <h1 className="text-gray-900 text-2xl font-bold">Forgot your password?</h1>
            <h2 className="text-base text-gray-500">Don&apos;t fret! Just type in your email and we will send you a code to reset your password!</h2>
            <form className="space-y-5">
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div className="relative shadow-sm">
                        <input type="email" name="email" id="email" autoFocus autoComplete="email" className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="name@example.com" />
                    </div>
                    {/* <p className="text-gray-500 text-sm">We&apos;ll never share your details. See our Privacy Policy.</p> */}
                </div>

                <button className="flex w-full items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none bg-blue-700 hover:bg-blue-600 focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-blue-600 py-2.5 px-5 text-sm rounded-lg">
                    Reset Password
                </button>

            </form>
        </>
    )
}