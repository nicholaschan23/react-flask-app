// import React from 'react';
// import TextField from "@material-ui/core/TextField";
// // import '../css/register.css';

// export default function Register() {
//     return(
//         <main>
//             <div><LoginForm /></div>
//         </main>
//     );
// }

// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {first: '', last: ''};
//     this.handleFirst = this.handleFirst.bind(this);
//     this.handleLast = this.handleLast.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleFirst(event) {
//     this.setState({first: event.target.value});
//   }
//   handleLast(event) {
//     this.setState({last: event.target.value});
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     fetch("/first_name/" + this.state.first)
//     // .then(response => this.setState({last: response.json()}))
//     .then(data => this.setState({last: data}))
//     .catch(error => {console.log(error)})
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} >
//         <label>
//           Your input request to server
//           <br />
//           <input type="text" value={this.state.first} onChange={this.handleFirst} />
//         </label>
//         <br />
//         <label>
//           Response from server
//           <br />
//           <input type="text" value={this.state.last} onChange={this.handleLast} />
//         </label>
//         <br />
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }