import  { useNavigate } from 'react-router-dom';

import { useRef, useState, useEffect } from 'react';
import { useAuthUpdate} from '../../hooks/useAuth';
import axios from '../../api/axios';
const LOGIN_URL = 'api/v1/users/login'

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const { setAuthInfo } = useAuthUpdate();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (userRef.current) {
          userRef.current.focus();
        }
      }, []);


    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
            const response = await axios.post(LOGIN_URL,
                
                JSON.stringify({email : user, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
                setAuthInfo(response.data.token, response.data.role, response.data.email );
                console.log(response.data)

                navigate('/user');
                

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
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
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