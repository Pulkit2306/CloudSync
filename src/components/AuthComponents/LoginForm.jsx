import React from 'react'
import { signInUser } from '../../redux/actionCreators/authActionCreator';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [success, setSuccess] = React.useState(false);


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            toast.error("Please Fill Out all the Fields Correctly");
            return;
        }

        dispatch(signInUser(email, password, setSuccess));
    };

    React.useEffect(() => {
        if(success){
            navigate("/dashboard");
        }        
    }, [navigate, success]);


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group my-2">
                <input type="email" className="form-control" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group my-2">
                <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary my-2 form-control">
                Login
            </button>
        </form>
    )
}

export default LoginForm;