import TitleScreen from "./TitleScreen";
import PrimaryInput from "../../components/PrimaryInput";
import MyButton from "../../components/MyButton";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Signup() {
const navigate = useNavigate()
const handleSubmit =()=>{
  toast.success("Account Created Successfully")

  setTimeout(() => {
  toast("To verify account check mail. ", {
    icon: "📧",
  })

  }, 1000);
  setTimeout(() => {
  navigate("/login")

  }, 1500);

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
            <h2 className="text-3xl font-bold mb-2">
              Create Account For{" "}
              <span className="text-bgPrimary">BookNest </span>
            </h2>
            <p className="text-gray-400 text-lg font-semibold mb-6">
              Sign up to Exchange your Books with the world
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className=" flex  w-full gap-4">
              <div className="flex-1">
                <PrimaryInput
                  isRequired={true}
                  label="FirstName"
                  type="text"
                  placeholder={"Enter your First Name"}
                  icon="fa-user"
                />
              </div>
              <div className="flex-1">
                <PrimaryInput
                  isRequired={true}
                  label={"Last Name"}
                  type="text"
                  placeholder={"Enter your last Name"}
                  icon="fa-user"
                />
              </div>
            </div>
              <PrimaryInput
              label={"Email"}
              isRequired={true}
              type="email"
                placeholder={"Enter your phone email"}
                icon="fa-envelope"
                />
              <PrimaryInput
              isRequired={true}
                label="Phone"

                type="text"
                placeholder={"Enter your phone Number"}
                icon="fa-phone"
              />


              <PrimaryInput
  isRequired={true}
                label="Password"
type="password"
                placeholder={"Enter password"}
                icon="fa-lock"
              />


              <PrimaryInput
  isRequired={true}
                label="Confirm Password"
                type="password"
                placeholder={"Enter password"}
                icon="fa-lock"
              />
            <div className="space-y-3">
              <MyButton
                onClick={handleSubmit}
                btnText="Sign Up"
                style="bg-bgPrimary py-2 text-lg capitalize"
              />
              <p className="float-end font-semibold text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 underline">
                  Login
                </Link>
              </p>
            </div>
            </div>

          </div>
        </div>
      </div>
  );
}
