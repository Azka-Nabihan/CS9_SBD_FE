// Import Link from react-router-dom for navigation between pages
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5444/api/user/login', {
                email,
                password,
            });

            if (response.data.success) {
                alert('Login successful!');
                localStorage.setItem('isAuthenticated', "true"); // Set authentication status in local storage
                navigate('/'); // Redirect to home page after successful login
            } else {
                setError(response.data.message || 'Login failed!');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred!');
        }
    }

    return (
        // Main section with flexbox to center content vertically and horizontally
        <section className="py-32 flex justify-center items-center min-h-screen">
            <div className="container">
                {/* Container for the login form and related elements */}
                <div className="flex flex-col gap-4">
                    
                    {/* Card container for the login form */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto w-full max-w-md">
                        <div className="flex flex-col space-y-1.5 p-6 items-center">
                            {/* Title and description for the login form */}
                            <h3 className="font-semibold tracking-tight text-xl">
                                Log in with your email
                            </h3>
                            <p className="text-sm text-zinc-600">
                                Enter your information to login
                            </p>
                        </div>
                        <div className="p-6 pt-0">

                            {/* Form elements for login */}
                            <form onSubmit={handleLogin} className="grid gap-4">
                                {/* Input field for email */}
                                <div className="grid gap-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="email"
                                        placeholder="m@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required=""
                                    />
                                </div>
                                {/* Input field for password */}
                                <div className="grid gap-2">
                                    <div className="flex justify-between">
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="password"
                                        >
                                            Password
                                        </label>
                                        <a href="#" className="text-sm underline">
                                            Forgot password
                                        </a>
                                    </div>
                                    <input
                                        type="password"
                                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                {error && <p className='text-red-500 text-sm'>{error}</p>}
                                {/* Submit button for login */}
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full"
                                    type="submit"
                                >
                                    Log in
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* Link to navigate to the register page */}
                    <div className="mx-auto flex gap-1 text-sm">
                        <p>Don&#x27;t have an account yet?</p>
                        <Link to="/register" className='underline'>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}