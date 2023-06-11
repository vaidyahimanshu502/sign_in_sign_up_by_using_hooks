
// import React, {useState} from 'react'

// import React, {useState, useEffect} from 'react';
import {SignUpForm, LogInForm} from './Sign'
// class App extends React.Component {
//   constructor(props) {
//      super(props)
//      this.state = {email: ''}
//   }
//   handleChange = (e) => {
//     this.setState({
//       email: e.target.value
//     })
//   }
//   render() {
//     return (
//       <div className="App" style={{padding: 20, textAlign: 'center', fontSize: 20}}>
//         <input value={this.state.email} 
//         onChange={this.handleChange}
//         />
//        <h1>Email: {this.state.email}</h1>
//       </div>
//     );
//   }
// }/


       // USING HOOKS -----------------------------------------------------------------------------------------

// function App() {
     
//   const [ email, setEmail ] = useState(' ')  //we can destructure it
//   const [ name, setName ] = useState(' ')  // ----> we can also destructuring it

//   // const email = emailState[0]
//   // const setEmail = emailState[1]

//   // const name = nameState[0]
//   // const setName = nameState[1]

//   function handleChange(e) {
//     setEmail(e.target.value)
//   }

//   function handleChangeName(e) {
//     setName(e.target.value)
//   }
//   return (
//     <div className="App" style={{padding: 20, textAlign: 'center', fontSize: 20}}>
//        <input value={email} 
//         onChange={handleChange}
//       />
//         <br />
//       <input value={name} 
//         onChange={handleChangeName}
//       />

//       <h1>Email: {email}</h1>
//       <h1>Name: {name}</h1>
//    </div>
//   )
// }

       //CALLING APIs USING HOOKS ---------------------------------------------------------------------------
  // function App() {
  //   const [userId, setUserId] = useState('1');
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  //     fetch(url)
  //        .then((Response) => Response.json())
  //        .then((data) => {
  //         console.log('Data ::', data)
  //         setData(data)
  //        })
  //        //passing empty array for preventing INFINITE APIs CALL
  //   }, [userId])

  //       // using EVENT-LISTENER in hooks

  //   useEffect(() => {
  //     document.addEventListener('mousemove', onMouseMove);
  //     // APPLYING COMPONENTDIDMOUNT
  //     return () => {
  //       document.removeEventListener('mousemove', onMouseMove);
  //     }
  //   })

  //   function onMouseMove(event) {
  //     console.log(event.clientX)
  //   }

  //   return (
  //     <div className="App" style={{paddingLeft: 20}}>
  //       <h1>App</h1>
  //       <button onClick={() => setUserId('2')}>change userId to 2</button>
  //       {data.map((user) => (
  //          <div>
  //          <p>{user.title}</p>
  //        </div>
  //       ))}
  //     </div>

  //   )
  // }
      
      //USING CUSTOM HOOKS by SignIn & SignUp form
  function App (props) {
    return (
      <div className="App" style={{paddingLeft: 20}}>
          <h2>LogIn</h2>
          <LogInForm />
          <br />
          <h2>SignUp</h2>
          <SignUpForm />
     </div>
    )
  }

export default App;
