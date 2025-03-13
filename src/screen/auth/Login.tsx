import TitleScreen from "./TitleScreen";
import PrimaryInput from "../../components/PrimaryInput";
import MyButton from "../../components/MyButton";
import { Link } from "react-router-dom";

 const Login = () =>  {
  const handleLogin = ()=>{
    console.log('click')
    localStorage.setItem("token","123456")  
    window.location.href = "/"
    window.location.reload()
  }
  return (
    <div className="flex flex-col  md:flex-row h-screen md:overflow-hidden">
      {/* Left Image Section */}
      <span className="hidden md:contents">
      <TitleScreen />
      </span>

      {/* Right Form Section */}
      <div className=" flex-1 flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <div className="w-[90%] flex flex-col container mx-auto md:w-[65%] bg-white ">
            <div className="flex flex-col gap-2">
            <h2 className=" text-3xl font-bold text-bgPrimary">BookNest </h2>
          <h2 className="text-3xl font-bold ">
            Welcome Back 
          </h2>
          <p className="text-gray-400 text-lg font-semibold mb-6">
          Log in to share your Books with the world
          </p>
          </div>

          <div className="w-full flex flex-col gap-3">
          
              <PrimaryInput
              label="Email"
              isRequired={true}
                type="email"
                placeholder={"Enter your phone email"}
                icon="fa-envelope"
              />
           

              <PrimaryInput
              isRequired={true}
            label="Password"
                type="password"
                placeholder={"Enter password"}
                icon="fa-lock"
              />

           
            <div className="space-y-3">
              <MyButton 
                onClick={handleLogin}
              btnText="Login"  style="bg-bgPrimary py-3  text-lg capitalize" />
            <p className="float-end font-semibold text-sm">
              <Link to="/reset-password" className="text-blue-500 ">
              Forget Password?
              </Link>
            </p>
            </div>
            <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <p className="text-center font-semibold text-sm">
              Don't have an Account ?{" "}
              <Link to="/signup" className="text-blue-500 underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;