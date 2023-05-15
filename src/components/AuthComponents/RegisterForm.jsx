import React from 'react';
import Stack from 'react-bootstrap/Stack';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../../redux/actionCreators/authActionCreator';
import { toast } from 'react-toastify';

const RegisterForm = () => {

    const [firstName, setFirstName] = React.useState('');
    const [middleName, setMiddleName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
    const [pno, setPno] = React.useState('');
    const [success, setSuccess] = React.useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password || !firstName || !lastName || !pno){
            toast.error("Please Enter All Your Details!");
            return;
        }

        if( password != passwordConfirmation){
            toast.error("Passwords do not Match");
            return;
        }


        dispatch(signUpUser(firstName, middleName, lastName, email, password, pno, setSuccess));
    };

    React.useEffect(() => {
        if(success){
            navigate("/login");
        }
    }, [navigate, success]);

  return (
    <form onSubmit={handleSubmit}>
            <Stack direction="horizontal" gap={1} className="form-group my-2">
                <div className="form-group">
                    <input type="text" className="form-control" name="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="middleName" placeholder="Middle Name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

            </Stack>

            <div className="form-group my-2">
                <input type="email" className="form-control" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group my-2">
                {/* <input type="number" name="pno" maxLength="10" placeholder="Contact Number" value={pno} onChange={(e) => setPno(e.target.value)} /> */}
                <PhoneInput value={pno} defaultCountry="IN" onChange={(e) => setPno(e)}/>  
            </div>

            <div className="form-group my-2">
                <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="form-group my-2">
                <input type="password" className="form-control" name="passwordConfirmation" placeholder="Re-Type Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary my-2 form-control">
                Create My Account
            </button>
        </form>
  )
}

export default RegisterForm