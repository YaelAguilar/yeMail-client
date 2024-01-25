import RegisterForm from '../components/molecules/RegisterForm';
import PageTemplate from '../components/templates/PageTemplate';
import { useAuth } from '../contexts/AuthContext';

const RegisterPage = () => {
    const { register } = useAuth();

    return (
        <PageTemplate>
            <RegisterForm onRegister={register} />
        </PageTemplate>
    );
};

export default RegisterPage;