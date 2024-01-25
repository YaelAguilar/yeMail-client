import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            const data = await response.json();
            onLogin(data.token);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full" />
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full" />
            <Button type="submit" className="w-full">Login</Button>
            {error && <div className="text-red-500">{error}</div>}
        </form>
    );
};

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
