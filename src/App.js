import logo from './logo.svg';
import './App.css';
import Signup from "./Signup";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Component } from 'react';
firebase .initializeApp({
  apiKey:"AIzaSyBpSRGGM7yLWedZ_CjtPkIucb3EnTRAAGY",
  authDomain :"auth-development-9c261.firebaseapp.com"
})
class App extends Component
{ 
  
  state={isSignedin:false}

uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: () => false
  }
}
componentDidMount=()=>
{

  firebase.auth().onAuthStateChanged(user=>{
    this.setState({isSignedin:!!user})
    console.log("user",user);
  })

}

  render()
  {
  return (
    <div className="App">
      <header className="App-header">
        <p> My react Firebase Project</p>
       {this.state.isSignedin ?(
         <>
         <div>Signed in</div>
         <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
         <button onClick={()=>firebase.auth().signOut()}>Sign out</button>
         </>
         ):(
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
      </header>
      
    </div>
  );
}
}
export default App;
