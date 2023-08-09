// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router";
// import { useAuthContext } from "../../hooks/useAuthContext";

// function Login() {
//   const { token, user } = useAuthContext();

//   let location = useLocation();

//   let from = location.state?.from?.pathname || "/";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login, isLoading } = useLogin();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login(email, password);
//     // if (isLoginSuccess) {
//     //   navigate(from, { replace: true });
//     // }
//   };
//   useEffect(() => {
//     if (token && user) {
//       navigate(from, { replace: true });
//     }
//   }, [token, navigate, from, user]);

//   return (
//     <div className="login">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 col-lg-4 mx-auto">
//             <div className="login-form">
//               <h5 className="text-center mb-4">Login Form</h5>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <input
//                     type="email"
//                     className="form-control"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <input
//                     type="password"
//                     className="form-control"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                   />
//                 </div>

//                 <button
//                   disabled={isLoading}
//                   type="submit"
//                   className="btn btn-success w-100 h-40 mt-0"
//                 >
//                   Login
//                 </button>
//               </form>
//               <div className="forget-pass mt-3 mb-4">
//                 <Link to="/forget-password">Forget Password?</Link>
//               </div>
//               <div className="dont-have-account d-flex justify-content-between align-items-center">
//                 <span>Don't have an account?</span>
//                 <Link to="/registration" className="btn">
//                   Register
//                 </Link>
//                 <Link to="/" className="btn">
//                   Home
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
