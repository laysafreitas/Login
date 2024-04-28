import { FaLock, FaUser } from "react-icons/fa";
import "../style/Login.css";


function Login() {
    return(
      <div className="body-login">
      <div className="wrapper">
     <form action="">
         <h1>Login</h1>
              <div className="input-box">
                 <input name="email" type="email" placeholder="email" />
                 <FaUser className="icon"/>
              </div>
              <div className="input-box">
                 <input name="Password" type="password" placeholder="Password"/>
                 <FaLock className="icon"/>
              </div>
              <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">forgot password?</a>
              </div>
 
          <button>Entrar</button>
 
     </form>
      </div>
      </div>
     )
 }
 
 export default Login;