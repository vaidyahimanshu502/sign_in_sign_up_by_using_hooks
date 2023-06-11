import React , {useState} from 'react';

// using CUSTOM HOOKS in this component
   function useFormInput(initialValue) {
        const [value, setValue] = useState(' ');

        function handleChange(e) {
            setValue(e.target.value)
        }

        return {
            value,
            onChange: handleChange
        }
   }
export function LogInForm() {
    // const [ email, setEmail] = useState(' ');
    // const [ password, setPassword] = useState(' ');

    // function handleEmailChange(e) {
    //     setEmail(e.target.value)
    // }
    // function handleChangePassword(e) {
    //     setPassword(e.target.value)
    // }
    const email = useFormInput('')
    const password = useFormInput('')

    return (
        <form action="">
            <div>Email</div>
            <div>
                <input type="email" value={email.value} onChange={email.onChange} />
            </div>
            <br />
            <div>Password</div>
            <div>
                <input type="password" value={password.value} onChange={password.onChange} />
            </div>

            <p>
                <strong>
                    <em>Email:</em>
                </strong>
                {email.value}
                <strong>
                    <em>Password:</em>
                </strong>{' '}
                { password.value }
            </p>
        </form>
    )
}

export function SignUpForm() {
    // const [ email, setEmail] = useState(' ');
    // const [ password, setPassword] = useState(' ');
    // const [ confirmPassword, setConfirmPassword ] = useState(' ');

    // function handleEmailChange(e) {
    //     setEmail(e.target.value)
    // }
    // function handleChangePassword(e) {
    //     setPassword(e.target.value)
    // }

    // function handleConfirmPasswordChange(e) {
    //     setConfirmPassword(e.target.value)
    // }

    const email = useFormInput('')
    const password = useFormInput('')
    const confirmPassword = useFormInput('')

    return (
        <form action="">
            <div>Email</div>
            <div>
                <input type="email" value={email.value} onChange={email.onChange} />
            </div>
            <br />
            <div>Password</div>
            <div>
                <input type="password" value={password.value} onChange={password.onChange} />
            </div>
            <div>Confirm Password</div>
            <div>
                <input type="password" value={confirmPassword.value} onChange={confirmPassword.onChange} />
            </div>
            <p>
                <strong>
                    <em>Email:</em>
                </strong>
                {email.value}
                <strong>
                    <em>Password:</em>
                </strong>{' '}
                { password.value }
                <strong>
                    <em>Confirm-Password:</em>
                </strong>{' '}
                {confirmPassword.value}
            </p>
        </form>
    )
}
// export default {SignUpForm, LogInForm}