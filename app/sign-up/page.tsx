// "use client";

// import Image from "next/image";
// import { signIn } from "next-auth/react";
// import { useState } from "react";



// export default function SignupPage() {
//     const [loading, setLoading] = useState(false);

//     const [email, setEmail] = useState("");
//     const [emailLoading, setEmailLoading] = useState(false);


//     const handleEmailSignup = async (
//         e?: React.FormEvent<HTMLFormElement>
//     ) => {
//         e?.preventDefault();

//         if (!email) {
//             alert("Please enter your email");
//             return;
//         }

//         try {
//             setEmailLoading(true);

//             const response = await fetch("/api/email-signup", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ email }),
//             });

//             if (response.ok) {
//                 window.location.href = "/free-score";
//             }
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setEmailLoading(false);
//         }
//     };

//     const handleGoogleLogin = async () => {
//         setLoading(true);

//         await signIn("google", {
//             callbackUrl: "/free-score",
//         });
//     };
//     return (
//         <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
//             {/* Logo */}
//             {/* <div className="flex items-center gap-2.5 mb-8">
//         <Image
//           src="/logo-nb.png"
//           alt="Opsell AI"
//           width={36}
//           height={36}
//           className="object-contain"
//         />
//         <span className="text-[22px] font-semibold text-n-900 tracking-tight font-display">
//           Opsell AI
//         </span>
//       </div> */}

//             {/* Card */}
//             <div className="w-full max-w-[480px] bg-n-50 border border-n-border rounded-2xl px-8 py-8 shadow-elev-2">
//                 {/* Score ready badge */}
//                 <div className="flex items-center gap-2 mb-3">
//                     <span className="flex items-center justify-center w-5 h-5 rounded-full bg-success text-white">
//                         <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
//                             <path
//                                 d="M1 4.5L4 7.5L10 1.5"
//                                 stroke="white"
//                                 strokeWidth="1.8"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             />
//                         </svg>
//                     </span>
//                     <span className="text-ds-body text-n-600 font-body">
//                         Your listing has been scored
//                     </span>
//                 </div>

//                 <h1 className="text-[26px] font-extrabold text-n-900 font-display leading-tight mb-1">
//                     Your score is ready.
//                 </h1>
//                 <p className="text-ds-body text-n-500 font-body mb-6">
//                     Create a free account to see it. Takes 30 seconds.
//                 </p>

//                 {/* Continue with Google */}
//                 <button
//                     onClick={handleGoogleLogin}
//                     disabled={loading}
//                     className="w-full flex items-center justify-center gap-3 bg-white border border-n-border rounded-xl px-4 py-3.5 text-[15px] font-semibold text-n-900 font-body shadow-elev-1 hover:shadow-elev-2 hover:border-n-300 transition-all duration-150 mb-3 disabled:opacity-50"
//                 >
//                     <GoogleIcon />
//                     {loading ? "Redirecting..." : "Continue with Google"}
//                 </button>



//                 {/* Continue with phone */}
//                 <button className="w-full flex items-center justify-center gap-3 bg-white border border-n-border rounded-xl px-4 py-3.5 text-[15px] font-semibold text-n-900 font-body shadow-elev-1 hover:shadow-elev-2 hover:border-n-300 transition-all duration-150">
//                     <PhoneIcon />
//                     Continue with phone number
//                     <span className="ml-auto bg-error/20 text-error text-[11px] font-semibold px-2 py-0.5 rounded-full">
//                         optional
//                     </span>
//                 </button>

//                 {/* OR divider */}
//                 <div className="flex items-center gap-3 my-6">
//                     <div className="flex-1 h-px bg-n-border" />
//                     <span className="text-ds-caption text-n-400 font-body tracking-widest uppercase">
//                         OR
//                     </span>
//                     <div className="flex-1 h-px bg-n-border" />
//                 </div>

//                 <form onSubmit={handleEmailSignup}>
//                     <label className="block text-ds-body font-semibold text-n-900 font-body mb-1.5">
//                         Email
//                     </label>

//                     <input
//                         type="email"
//                         placeholder="name@company.com"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full bg-white border border-n-border rounded-xl px-4 py-3 text-ds-body text-n-900 font-body placeholder:text-n-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-150 mb-4"
//                     />

//                     <button
//                         type="submit"
//                         disabled={emailLoading}
//                         className="w-full bg-brand hover:bg-brand-dark active:bg-brand-deeper text-white font-semibold text-[15px] font-body rounded-xl py-3.5 transition-colors duration-150 shadow-elev-1 disabled:opacity-50"
//                     >
//                         {emailLoading ? "Saving..." : "Continue with email"}
//                     </button>
//                 </form>

//                 {/* Legal */}
//                 <p className="text-center text-ds-caption text-n-400 font-body mt-4 leading-relaxed">
//                     By continuing, you agree to Opsell&apos;s{" "}
//                     <a href="#" className="text-brand hover:underline">
//                         Terms of Service
//                     </a>
//                     . We never share your data with marketplaces.
//                 </p>
//             </div>
//         </div>
//     );
// }

// function GoogleIcon() {
//     return (
//         <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//             <path
//                 d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z"
//                 fill="#4285F4"
//             />
//             <path
//                 d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.596-4.123H1.064v2.59A9.996 9.996 0 0010 20z"
//                 fill="#34A853"
//             />
//             <path
//                 d="M4.404 11.9A5.986 5.986 0 014.182 10c0-.662.114-1.305.222-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.141 1.064 4.49l3.34-2.59z"
//                 fill="#FBBC05"
//             />
//             <path
//                 d="M10 3.977c1.468 0 2.786.505 3.822 1.496l2.868-2.868C14.959.99 12.695 0 10 0A9.996 9.996 0 001.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z"
//                 fill="#EA4335"
//             />
//         </svg>
//     );
// }

// function PhoneIcon() {
//     return (
//         <svg
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
//         </svg>
//     );
// }



"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignupPage() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [emailLoading, setEmailLoading] = useState(false);

    const handleEmailSignup = async (
        e?: React.FormEvent<HTMLFormElement>
    ) => {
        e?.preventDefault();

        if (!email) {
            alert("Please enter your email");
            return;
        }

        try {
            setEmailLoading(true);

            const response = await fetch("/api/email-signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                window.location.href = "/free-score";
            }
        } catch (error) {
            console.error(error);
        } finally {
            setEmailLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        await signIn("google", { callbackUrl: "/free-score" });
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10 sm:py-16">
            {/* Card */}
            <div className="w-full max-w-[480px] bg-n-50 border border-n-border rounded-2xl px-5 py-7 sm:px-8 sm:py-8 shadow-elev-2">
                {/* Score ready badge */}
                <div className="flex items-center gap-2 mb-3">
                    <span className="flex shrink-0 items-center justify-center w-5 h-5 rounded-full bg-success text-white">
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                            <path
                                d="M1 4.5L4 7.5L10 1.5"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <span className="text-ds-body text-n-600 font-body">
                        Your listing has been scored
                    </span>
                </div>

                <h1 className="text-2xl sm:text-[26px] font-extrabold text-n-900 font-display leading-tight mb-1">
                    Your score is ready.
                </h1>
                <p className="text-ds-body text-n-500 font-body mb-6">
                    Create a free account to see it. Takes 30 seconds.
                </p>

                {/* Continue with Google */}
                <button
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 bg-white border border-n-border rounded-xl px-4 py-3.5 text-[15px] font-semibold text-n-900 font-body shadow-elev-1 hover:shadow-elev-2 hover:border-n-300 transition-all duration-150 mb-3 disabled:opacity-50"
                >
                    <GoogleIcon />
                    {loading ? "Redirecting..." : "Continue with Google"}
                </button>

                {/* Continue with phone */}
                <button className="w-full flex items-center justify-center gap-3 bg-white border border-n-border rounded-xl px-4 py-3.5 text-[15px] font-semibold text-n-900 font-body shadow-elev-1 hover:shadow-elev-2 hover:border-n-300 transition-all duration-150">
                    <PhoneIcon />
                    <span className="truncate">Continue with phone number</span>
                    <span className="ml-auto shrink-0 bg-error/20 text-error text-[11px] font-semibold px-2 py-0.5 rounded-full">
                        optional
                    </span>
                </button>

                {/* OR divider */}
                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-n-border" />
                    <span className="text-ds-caption text-n-400 font-body tracking-widest uppercase">
                        OR
                    </span>
                    <div className="flex-1 h-px bg-n-border" />
                </div>

                <form onSubmit={handleEmailSignup}>
                    <label className="block text-ds-body font-semibold text-n-900 font-body mb-1.5">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-n-border rounded-xl px-4 py-3 text-ds-body text-n-900 font-body placeholder:text-n-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-150 mb-4"
                    />

                    <button
                        type="submit"
                        disabled={emailLoading}
                        className="w-full bg-brand hover:bg-brand-dark active:bg-brand-deeper text-white font-semibold text-[15px] font-body rounded-xl py-3.5 transition-colors duration-150 shadow-elev-1 disabled:opacity-50"
                    >
                        {emailLoading ? "Saving..." : "Continue with email"}
                    </button>
                </form>

                {/* Legal */}
                <p className="text-center text-ds-caption text-n-400 font-body mt-4 leading-relaxed">
                    By continuing, you agree to Opsell&apos;s{" "}
                    <a href="#" className="text-brand hover:underline">
                        Terms of Service
                    </a>
                    . We never share your data with marketplaces.
                </p>
            </div>
        </div>
    );
}

function GoogleIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
            <path
                d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z"
                fill="#4285F4"
            />
            <path
                d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.596-4.123H1.064v2.59A9.996 9.996 0 0010 20z"
                fill="#34A853"
            />
            <path
                d="M4.404 11.9A5.986 5.986 0 014.182 10c0-.662.114-1.305.222-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.141 1.064 4.49l3.34-2.59z"
                fill="#FBBC05"
            />
            <path
                d="M10 3.977c1.468 0 2.786.505 3.822 1.496l2.868-2.868C14.959.99 12.695 0 10 0A9.996 9.996 0 001.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z"
                fill="#EA4335"
            />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
        >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
    );
}