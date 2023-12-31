import Login from "../components/Login.js";
import Footer from "../components/Footer.js";
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/scss/argon-design-system-react.scss?v1.1.0";

function LoginPage({setToken}) {
        return (
        <div>
            <Login setToken={setToken}/>
            <Footer />
        </div>
        )
    }
    
export default LoginPage;
