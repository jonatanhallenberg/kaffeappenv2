import { FormEvent, FormEventHandler, useState } from 'react';
import Textbox from '../atoms/Textbox';
import Button from '../atoms/Button';


interface LoginFormProps {
    onSubmit: (formData: FormData) => void;
}

export interface FormData {
    username?: string,
    password?: string,
    errors?: string[]
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isUsernameTouched, setIsUsernameTouched] = useState(false);
    const [isPasswordTouched, setIsPasswordTouched] = useState(false);

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        const errors = validateForm();
        if (errors.length > 0) {
            onSubmit({ errors });
            setIsUsernameTouched(true);
            setIsPasswordTouched(true);
        } else {
            onSubmit({ username, password });
        }
    }

    const validateForm = () => {
        let errors = [];
        if (username.length === 0) {
            errors.push("Du har inte fyllt i något användarnamn");
        }
        if (password.length === 0) {
            errors.push("Du har inte fyllt i något lösenord");
        }
        return errors;
    }

    return (
        <form onSubmit={submitForm}>
            <Textbox isValid={!isUsernameTouched || !!username} onChange={(event) => { setUsername(event.target.value); setIsUsernameTouched(true); }} placeholder="användarnamn" />
            <Textbox isValid={!isPasswordTouched || !!password} onChange={(event) => { setPassword(event.target.value); setIsPasswordTouched(true); }} placeholder="lösenord" />
            <Button type="submit" >Logga in</Button>
        </form>
    )
}

export default LoginForm;