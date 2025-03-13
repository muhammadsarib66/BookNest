import  { useState } from "react";

const PrimaryInput = ({ type, placeholder, icon,style ,value,onChange , name,label ,isRequired }:any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1 ">
                <label className="font-semibold text-sm">{label} {isRequired && <span className="text-red-700">*</span>}</label> 

    <div className={`flex items-center  p-2 rounded-md text-textSecondary bg-bgSecondary w-full ${style}`}>
      <i className={`fas ${icon} text-gray-500 mr-2`}></i>
      <input
      onChange={onChange}
      value={value}
      name={name}
      type={type === "password" && showPassword ? "text" : type}
      placeholder={placeholder}
      className="outline-none w-full bg-transparent placeholder:text-sm"
      />
       {type === "password" && (
         <i
         className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} text-gray-500 cursor-pointer`}
         onClick={() => setShowPassword(!showPassword)}
         ></i>
        )}
    </div>
        </div>
  );
};

export default PrimaryInput