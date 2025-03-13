import  { useRef, useState } from 'react'
import TitleScreen from './TitleScreen';
import { backIcon } from '../../assets/icons';
import MyButton from '../../components/MyButton';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const VerifyOtp = () => {

    const navigate = useNavigate();
  const otpBoxes = useRef<any>([]);
  const [otp, setOtp] = useState<any>(["", "", "", "","",""]);

  const handleChange = (index:any, e:any) => {
    let value = e.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value entered
    if (value && index < otpBoxes.current.length - 1) {
      otpBoxes.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index:any, e:any) => {
    if (e.key === "Backspace") {
      let newOtp = [...otp];

      // Remove value and move back
      if (newOtp[index] === "" && index > 0) {
        otpBoxes.current[index - 1].focus();
      }
      
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };
    return (
        <div className="flex flex-col  md:flex-row h-screen md:overflow-hidden">
        {/* Left Image Section */}
        <span className="hidden md:contents">
          <TitleScreen />
        </span>
  
        {/* Right Form Section */}
        <div className=" flex-1 relative flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <div className="w-[90%]  flex flex-col container mx-auto md:w-[65%] bg-white ">
          <div className="">
            <button
              onClick={() => navigate(-1)} // 👈 Go back to previous page
              className=" rounded-full border-2 hover:bg-gray-200 transition"
            >
              <img src={backIcon} alt="Back" className="w-5 h-5" />
            </button>
          </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold ">Verify <span className='text-bgPrimary'> OTP</span></h2>
              <p className="text-gray-400 text-lg font-semibold mb-6">
                An <span className='text-gray-800'>OTP</span> has been sent to your email
              </p>
            </div>
  
            <div className="w-full flex flex-col gap-3">
            <div className="flex  justify-around gap-4">
            {otp.map((_:any, index:any) => (
              <input
                key={index}
                ref={(el) => (otpBoxes.current[index] = el)}
                type="text"
                maxLength={1}
                className="w-16 h-16 text-2xl font-semibold text-center border rounded-md bg-gray-100 focus:outline-blue-500"
                value={otp[index]}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>

          {/* Resend Option */}
          <p
          onClick={()=>toast.success('OTP Resent')}
          className="text-superPrimary font-bold text-left cursor-pointer mb-5 text-bgPrimary">Resend</p>

  
              <div className="space-y-3">
                <MyButton
    onClick={()=>navigate('/set-new-password')}
btnText="Verify OTP"
                  style="bg-bgPrimary py-3  text-lg capitalize"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default VerifyOtp