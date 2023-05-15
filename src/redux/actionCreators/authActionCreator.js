import * as types from "../actionTypes/authActionTypes";
import fire from "../../config/firebase"
import { toast } from "react-toastify";




const loginUser = (payload) => {
    return {
        type: types.Sign_In,
        payload
    };
}

const logoutUser = () => {
    return {
        type: types.Sign_Out,
    };
}

export const signInUser = (email, password, setSuccess)=> (dispatch) => {
    console.log(email, password);
    fire.auth().signInWithEmailAndPassword(email, password).then(user => {
        // console.log(user);
        dispatch(loginUser({
            uid: user.user.uid,
            email: user.user.email,
            displayName: user.user.displayName,
        }));
        setSuccess(true);
    }).catch((error) => {
        toast.warn("Invalid Email or Password", error);
    })
};

export const signUpUser = (firstName, middleName, lastName, email, password, pno, setSuccess) => (dispatch) => {
    // console.log(firstName, lastName, email, password, pno);
    const name = firstName + " "  + middleName + " " + lastName;
    fire.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        fire.auth().currentUser.updateProfile({
            displayName: name,
        }).then(async () => {
            const currentUser = await fire.auth().currentUser;
            console.log(currentUser);
        }).catch((error) => {
            console.log(error);
        })
        console.log(user);

        fire.auth().currentUser.updatePhoneNumber({
            phoneNumber: pno,
        }).then(() => {
            const currentUser = fire.auth().currentUser;
            dispatch(loginUser({
                uid: currentUser.uid,
                name: currentUser.displayName,
                email: currentUser.email,
            }))
            setSuccess(true);
        }).catch((error) => {
            console.log(error);
        })

    }).catch((error) => {
        if(error.code == "auth/email-already-in-use"){
            toast.warning("Email already in use by another account. Please use a different email address.")
        }
        if(error.code == "auth/invalid-email"){
            toast.warn("Invalid email address!");
        }
        if(error.code == "auth/weak-password"){
            toast.warning("Your password is weak. Please set a new one.");
        }
    })


}

export const SignOutUser = () => (dispatch) => {
    fire.auth().signOut().then(()=>{
        dispatch(logoutUser());
    })
}

export const checkIfLoggedIn = () => (dispatch) => {
    fire.auth().onAuthStateChanged(user => {
        if(user){
            dispatch(loginUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            }))
        }
    })
}