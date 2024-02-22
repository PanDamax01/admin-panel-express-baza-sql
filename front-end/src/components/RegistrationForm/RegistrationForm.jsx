import styles from './RegistrationForm.module.scss';
import loginIcon from '../../assets/icon-login.png';
import PasswordIcon from '../../assets/icon-password.png';

import { useState } from 'react';
import { FullWidthButton } from '../FullWidthButton/FullWidthButton';

export function RegistrationForm() {
    const [showPassword, setShowPassword] = useState(false);

    function handleShownPassword(e) {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Rejestracja</h1>

                <form>
                    <div className={styles.box}>
                        <input
                            className={styles.input}
                            type='text'
                            name='user_name'
                            id='name'
                            autoComplete='given-name'
                            required
                        />
                        <label className={styles.label} htmlFor='name'>
                            Imię
                        </label>
                        <img
                            className={styles.img}
                            src={loginIcon}
                            alt='Icon login'
                        />
                    </div>
                    <div className={styles.box}>
                        <input
                            className={styles.input}
                            type='text'
                            name='user_lastname'
                            id='surname'
                            autoComplete='family-name'
                            required
                        />
                        <label className={styles.label} htmlFor='surname'>
                            Nazwisko
                        </label>
                        <img
                            className={styles.img}
                            src={loginIcon}
                            alt='Icon login'
                        />
                    </div>

                    <div>
                        <div className={styles.container__role}>
                            <p className={styles.p__role}>Wybierz rolę</p>
                            <img
                                className={styles.img}
                                src={loginIcon}
                                alt='Icon login'
                            />
                        </div>
                        <div className={styles.container__input__role}>
                            <div className={styles.box__role}>
                                <input
                                    className={styles.input__radio}
                                    type='radio'
                                    name='admin'
                                    id='admin'
                                    value='true'
                                    required
                                />
                                <label
                                    className={styles.label__radio}
                                    htmlFor='admin'
                                >
                                    Admin
                                </label>
                            </div>
                            <div className={styles.box__role}>
                                <input
                                    className={styles.input__radio}
                                    type='radio'
                                    name='admin'
                                    id='customer'
                                    value='false'
                                    required
                                />
                                <label
                                    className={styles.label__radio}
                                    htmlFor='customer'
                                >
                                    Użytkownik
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <input
                            className={styles.input}
                            type='email'
                            name='email'
                            id='email'
                            autoComplete='email'
                            required
                        />
                        <label className={styles.label} htmlFor='email'>
                            Email
                        </label>
                        <img
                            className={styles.img}
                            src={loginIcon}
                            alt='Icon login'
                        />
                    </div>

                    <div className={styles.box}>
                        <input
                            className={styles.input}
                            type='text'
                            name='login'
                            id='login'
                            autoComplete='login'
                            required
                        />
                        <label className={styles.label} htmlFor='login'>
                            Login
                        </label>
                        <img
                            className={styles.img}
                            src={loginIcon}
                            alt='Icon login'
                        />
                    </div>

                    <div className={styles.box}>
                        <input
                            className={styles.input}
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            id='password'
                            autoComplete='off'
                            required
                        />
                        <label className={styles.label} htmlFor='password'>
                            Hasło
                        </label>
                        <img
                            className={styles.img}
                            src={PasswordIcon}
                            alt='Icon password'
                        />
                        <button
                            onClick={handleShownPassword}
                            className={styles.eyes}
                        >
                            👀
                        </button>
                    </div>

                    <FullWidthButton>Zarejestruj się</FullWidthButton>
                </form>
            </div>
        </div>
    );
}
