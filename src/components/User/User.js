import { useAuth } from "../../hooks/useAuth";


const User = () => {
    const auth = useAuth();

    return (
        <>
            {auth.token ? (
                <div>
                    <h1>USER Info</h1>

                    <div>
                        <p>Email: {auth.email}</p>
                        <p>Role: {auth.role}</p>
                        <p>Token: {auth.token}</p>
                    </div>

                </div>
            ) : (
                <div>
                    <h1>No User Information</h1>
                </div>
                )}
        
        </>
    );
}

export default User;