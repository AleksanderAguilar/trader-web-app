import { useRef, useState, useEffect } from "react";
import axios from "../../api/axios"
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;
const REGISTRATION_URL = 'api/v1/users/'


function Register() {
    const userRef = useRef();
    const errRef = useRef();

    //email 
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    //first_name
    const [firstName, setFirstName] = useState('');
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    //last_name
    const [lastName, setLastName] = useState('');
    const [lastNameFocus, setLastNameFocus] = useState(false);

    //password
    const [pwd, setPwd] = useState('')
    const [validPwd, SetValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    //match password
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (userRef.current) {
          userRef.current.focus();
        }
      }, []);

    useEffect(() => {
        // const result = EMAIL_REGEX.test(email);
        const result = email;
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        // const result = PASSWORD_REGEX.test(pwd);
        const result = pwd;
        SetValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [email, firstName, lastName, pwd, matchPwd])


    const handleSubmit = async (e) => {
        console.log("in submit");

        const userData = {
            email: email,
            password: pwd,
            first_name: firstName,
            last_name: lastName
        };
        try {
            const response = await axios.post('/', userData)
            setSuccess(true)
            
        } catch (err) {
            console.log(err)
        }
    };

    return (
        
        <>
            {success ? (
                <div>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </div>
            ) : (
                <div>
                    {/* error message */}
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register Page</h1>
                    <form>
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="text"
                            id="email"
                            // ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />

                        <label htmlFor="firstName">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            autoComplete="off"
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            onFocus={() => setFirstNameFocus(true)}
                            onBlur={() => setFirstNameFocus(false)}

                        />
                        <label htmlFor="lastName">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            autoComplete="off"
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            onFocus={() => setLastNameFocus(true)}
                            onBlur={() => setLastNameFocus(false)}

                        />
                        <label htmlFor="password">
                            password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            autoComplete="off"
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            onFocus={(() => setPwdFocus(true))}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <label htmlFor="confirmPwd">
                            Confirm password:
                        </label>
                        <input
                            type="password"
                            id="confirmPwd"
                            autoComplete="off"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            required
                            onFocus={(() => setMatchFocus(true))}
                            onBlur={() => setMatchFocus(false)}
                        />

                        {/* <button > disabled={!validEmail || !validPwd || !validMatch || !firstName || !lastName ? true : false}> */}
                        <button type="button" onClick={handleSubmit}>
                            Sign Up
                        </button>
                    </form>
                    <p>
                        Already Registered <br />
                        <span>
                            <a href="/">Sign In</a>
                        </span>
                    </p>

                    {/* <button onClick={setSuccess(true)}>
                        test succes
                    </button> */}
                </div>
            )}
        </>
    )
}

export default Register;