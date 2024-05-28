import { useRef, useState, useEffect,  } from 'react';
import axios from '../../api/axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducer/userSlice';
import { useNavigate } from 'react-router-dom';

const LOGIN_URL = 'api/v1/users/login'
const Login = () => {
    const dispatch = useDispatch();
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();
    const [loginUser, setLofingUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        if (userRef.current) {
          userRef.current.focus();
        }
      }, []);


    useEffect(() => {
        setErrMsg('');
    }, [loginUser, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                
                JSON.stringify({email : loginUser, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });

                const info = {
                    token: response.data.token,
                    email: response.data.email,
                    role: response.data.role,
                }; 
                
                dispatch(setUser(info));
                navigate('/user')

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server response');
            } else if (err.response = 401) {
                setErrMsg ('Incorrect Username or password');
            } else {
                setErrMsg ('Login Failed')
            }
        }

    }

    return (

                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}a
                            autoComplete="off"
                            onChange={(e) => setLofingUser(e.target.value)}
                            value={loginUser}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button onClick={handleSubmit}>Sign In</button>

                    </form>
                </section>
            )}


export default Login