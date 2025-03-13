import React from 'react'
import PrimaryInput from '../../components/PrimaryInput'
import MyButton from '../../components/MyButton';
import { Avatar } from '@material-tailwind/react';
import { userImg } from '../../assets/icons';

const EditProfile = () => {
    const [profile, setProfile] = React.useState({
        firstName: "Sarib",
        lastName: "Noor",
        email: "saribnoor0310@gmail.com",
        phone: "03103102166",
        password: "",
        confirmPassword: "",
      });
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
      };
    
        const handleSubmit = () => {
            console.log("Profile", profile);
        };
  return (
    <div className='h-screen flex  justify-center  pt-12'>
        <div className="w-[90%] flex flex-col container mx-auto md:w-[55%] bg-white ">
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold mb-2">
        Edit Your Profile
      </h2>
      
    </div>
    <div>
        <Avatar className='border-2 border-bgPrimary' size="xxl" src={userImg} />
    </div>

    <div className="w-full flex flex-col gap-3">
      <div className=" flex  w-full gap-4">
        <div className="flex-1">
          <PrimaryInput
          value={profile.firstName}
          onChange={handleChange}
          name="firstName"
            isRequired={true}
            label="FirstName"
            type="text"
            placeholder={"Enter your First Name"}
            icon="fa-user"
          />
        </div>
        <div className="flex-1">
          <PrimaryInput
            value={profile.lastName}
            onChange={handleChange}
            name="lastName"
            isRequired={true}
            label={"Last Name"}
            type="text"
            placeholder={"Enter your last Name"}
            icon="fa-user"
          />
        </div>
      </div>
      <div className=" flex  w-full gap-4">
      <div className="flex-1">

        <PrimaryInput
        value={profile.email}
        onChange={handleChange}
        name="email"
        label={"Email"}
        isRequired={true}
        type="email"
          placeholder={"Enter your phone email"}
          icon="fa-envelope"
          />
        </div>
        <div className="flex-1">

        <PrimaryInput
        value={profile.phone}
        onChange={handleChange}
        name="phone"
        isRequired={true}
        label="Phone"
        
        type="text"
        placeholder={"Enter your phone Number"}
        icon="fa-phone"
        />
        </div>
        </div>


        <PrimaryInput
isRequired={true}
          label="Change Password"
type="Current Password"
          placeholder={"Enter password"}
          icon="fa-lock"
        />


        <PrimaryInput
isRequired={true}
          label="New Password"
          type="password"
          placeholder={"Enter password"}
          icon="fa-lock"
        />
        <PrimaryInput
isRequired={true}
          label="Confirm New Password"
          type="password"
          placeholder={"Enter password"}
          icon="fa-lock"
        />
      <div className="space-y-3 w-fit">
        <MyButton
          onClick={handleSubmit}
          btnText="Save Changes"
          style="bg-bgPrimary py-2 text-lg px-20 py-3  capitalize"
        />
      
      </div>
      </div>

    </div>
    </div>
  )
}

export default EditProfile