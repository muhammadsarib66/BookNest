import  { useEffect, useState } from 'react'

import {heartIcon,
notificationIcon,userImg,
searchIcon, 
mainBigLogo,
chevronIcon,
postBookImg,
mybookImg,
logoutImg} from '../assets/icons' 
import { Avatar } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const categories = ["All Categories", "Books", "Magazines", "Dictionaries"];

const Navbar = () => {
    const navigate = useNavigate();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<any>(categories[0]);
    const [searchQuery, setSearchQuery] = useState<any>("");
    const [isNotificationOpen, setNotificationOpen] = useState(false);
  

  const notifications = [
    { id: 1, text: "You received a new message from sarib", date: "10 Dec-2024" },
    { id: 2, text: "You received a new message  sarib", date: "10 Dec-2024" },
    { id: 3, text: "You received a new message  sarib", date: "10 Dec-2024" },
    { id: 4, text: "You received a new bid sarib", date: "10 Dec-2024" },
  ];

  useEffect(() => {
    if(isNotificationOpen ){
      setIsProfileOpen(false)
    }
    if(isProfileOpen){
      setNotificationOpen(false)
    }
  }, [
    isNotificationOpen,
    isProfileOpen
  ]);
  return (
    <>
    <div className='fixed top-0 left-0 z-[100] flex w-full h-20 overflow-hidden bg-white border-b border-2 px-16 py-4 justify-between items-center'>
            <div onClick={()=>{navigate('/')
              setIsProfileOpen(false)
            }} className='cursor-pointer'>
                <img src={mainBigLogo} alt="logo" className="w-full h-full" />
            </div>
        <div className="flex items-center h-full border rounded-lg overflow-hidden w-[60%] shadow-sm ">
      {/* Category Dropdown */}
      <div className="relative   my-4">
        <select
          className="bg-white px-4 py-2 outline-none appearance-none text-sm font-semibold text-textSecondary cursor-pointer"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Books, Magazines, Dictionaries"
        className="flex-1 px-4  text-sm font-semibold h-fit outline-none border-l-2 border-gray-700 text-gray-700"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />

      {/* Search Button */}
      <div  className="bg-bgPrimary select-none h-full w-12 flex items-center justify-center text-white rounded-lg">
        <img src={searchIcon} alt="search" className="w-4 h-4" />
      </div>
    </div>
          <div className='flex gap-4'>
            <div className='flex items-center gap-4'>
                <img 
                 onClick={() => setNotificationOpen(!isNotificationOpen)}
                src={notificationIcon} alt="notification" className="w-5 h-5 cursor-pointer" />
                <img
                onClick={() => {
                  navigate('/liked-books')
                  setIsProfileOpen(false)
                  setNotificationOpen(false)
                }}
                src={heartIcon} alt="heart" className="w-5 h-5 cursor-pointer" />
            </div>
            {/* // profile */}
            <div className='flex relative items-center gap-1'>

            <Avatar className='border-2 border-bgPrimary' size="md" src={userImg} />
            <img
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            src={chevronIcon} alt="chevron" className={`w-3 h-3 transform duration-300 ${isProfileOpen ?"transform rotate-180" :"" }`} />

          
            </div>
            
            {/* <img src={userImg} alt="profile" className="w-10 h-10 rounded-full" /> */}
          </div>
         
    </div>
    {isProfileOpen && (
                <div
                 className='fixed  right-16 z-[10000] text-textSecondary top-16 bg-[#F9FAFF] rounded-lg p-2 w-48'>
                      <div 
                      onClick={() => {navigate('/edit-profile')
                      setIsProfileOpen(false)
                      }}

                      className='text-xs text-black font-semibold py-2 text-center border border-black '>
                        View & Edit Profile
                      </div>
                    <div 
                    onClick={() => {navigate('/Post-new-book-ad')
                        setIsProfileOpen(false)

                    }}
                    className='text-xs font-semibold text-gray-900 flex items-center gap-2 p-2  hover:bg-textPrimary rounded cursor-pointer'>
                    <img src={postBookImg} alt="postBook" className="w-4 h-4" />
                    <span>Post Book</span>
                    </div>
                    <div 
                    onClick={() => {navigate('/my-books-listing')
                        setIsProfileOpen(false)}
                    }
                    className='text-xs font-semibold text-gray-900 flex items-center gap-2 p-2  hover:bg-textPrimary rounded cursor-pointer'>
                    <img src={mybookImg} alt="mybook" className="w-4 h-4" />

                    <span>My Books</span>
                    </div>
                    <div 
                    onClick={() => {navigate('/communication')
                        setIsProfileOpen(false)
                    }}
                    className='text-xs font-semibold text-gray-900 flex items-center gap-2 p-2  hover:bg-textPrimary rounded cursor-pointer'>
                    <img src={mybookImg} alt="mybook" className="w-4 h-4" />

                    <span>Chat</span>
                    </div>
                    <div 
                    onClick={() => {
                        // Add logout logic here
                        navigate('/login');
                            localStorage.clear();
                            window.location.reload();                        

                    }}
                    className='text-xs font-semibold text-gray-900 flex items-center gap-2 p-2  hover:bg-textPrimary rounded cursor-pointer'>
                    <img src={logoutImg} alt="mybook" className="w-4 h-4" />

                    <span>Logout</span>
                    </div>
                </div>
                )}
                {isNotificationOpen && (
        <div className="fixed  right-44 top-14 z-[10000] mt-2 w-72 bg-white shadow-lg rounded-lg border border-gray-200">
          <div className="p-3 text-lg font-semibold bg-bgPrimary text-textPrimary border-b">Notification</div>
          <div className="max-h-60 overflow-y-auto">
            {notifications.map((notif) => (
              <div key={notif.id} className="flex  p-3 border-b last:border-b-0 gap-2 hover:bg-bgSecondary">
                <img src={notificationIcon } alt="notification" className="w-4 h-4" />
                <div>
                  <p className="text-xs font-medium">{notif.text}</p>
                  <span className="text-xs text-gray-500">{notif.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
            </>
  )
}

export default Navbar