import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import API from "../api/axiosClient";

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    signInSuccessUrl: "/sign-in",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
};
async function getToken() {
    let results = await API.post(`/rest/V1/7hit/customers/social/token`,
        {
            "token": "EAAEynVn3ga4BALziZB03QHZAnh7rZB3X8qGbg7M5sB7C1OfeeKb9aWgh6OclLtmxobNygdfX3PYDTBBS4TBdby9CW4yFUwtBcswVbqqZCbdo7jw24usQXDirKf4ea1RlBKtc1mTc01ZAZBjjDwYwTbLn3D4VhoC7cAjt7OgJJIdXBkYTJKGmnX",
            "type": "facebook",
            "user_info": {
                "firstname": "Tin",
                "lastname": "Tran"
            }
        });
    return results
};

function SignInComponent() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>LOGIN</h1>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            <button style={{ width: 300, height: 100 }} onClick={getToken}>Set the Authorization Header with Axios</button>
        </div>
    );
}

export default SignInComponent

