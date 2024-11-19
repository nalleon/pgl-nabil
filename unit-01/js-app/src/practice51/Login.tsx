import React, { useState } from 'react';
import { useAppContext } from './AppContextProvider51.tsx';  

const Login = () => {
    const { setUsername } = useAppContext(); 
    const [input, setInput] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input) {
            setUsername(input); 
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
