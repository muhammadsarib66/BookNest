import  { useState } from 'react';
import { Book1, Book2, Book3, messageIcon } from "../assets/icons";
import { useNavigate } from 'react-router-dom';
const SelectedBookScreen = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(0);
    const [showContactOptions, setShowContactOptions] = useState(false);
    
    // Sample book data
    const book = {
      title: "Instant Communication with Real-Time Messaging",
      price: 260,
      rating: 4.5,
      reviews: 120,
      seller: "Tech Nepal, Lalitpur",
      timeAgo: "1 day ago",
      description: "Step by step instructions with tips, techniques for instant communication and real-time messaging.",
      images: [
        Book1,
        Book2,
        Book3,
        Book1,
      ]
    };
    
    // More books from the same seller
    const moreBooksFromSeller = [
      {
        id: 1,
        title: "Instant Communication with Real-Time Messaging",
        price: 21500,
        image: Book1,
        seller: "Tech Nepal, Lalitpur",
        timeAgo: "1 day ago"
      },
      {
        id: 2,
        title: "Instant Communication with Real-Time Messaging",
        price: 23500,
        image: Book1,
        seller: "Tech Nepal, Lalitpur",
        timeAgo: "1 day ago"
      },
      {
        id: 3,
        title: "Instant Communication with Real-Time Messaging",
        price: 22500,
        image: Book1,
        seller: "Tech Nepal, Lalitpur",
        timeAgo: "1 day ago"
      }
    ];
    
    // Recommended books
    const recommendedBooks = [
      {
        id: 1,
        title: "Instant Communication with Real-Time Messaging",
        price: 22500,
        image: Book1,
        seller: "Tech Nepal, Patna",
        timeAgo: "1 day ago"
      },
      {
        id: 2,
        title: "Instant Communication with Real-Time Messaging",
        price: 23500,
        image: Book1,
        seller: "Tech Nepal, Patna",
        timeAgo: "1 day ago"
      },
      {
        id: 3,
        title: "Instant Communication with Real-Time Messaging",
        price: 22500,
        image: Book1,
        seller: "Tech Nepal, Patna",
        timeAgo: "1 day ago"
      }
    ];
    
    const handleBuyNow = () => {
      setShowContactOptions(true);
    };
    
    const redirectToWhatsApp = () => {
      // Replace with actual phone number
      window.open(`https://wa.me/+923103102166`, '_blank');
    };
    
    const redirectToCall = () => {
      // Replace with actual phone number
      window.location.href = `tel:+923103102166`;
    };
    
    const handleImageChange = (index:any) => {
      setSelectedImage(index);
    };
  
  return (
    <div className="max-w-6xl min-h-screen mx-auto p-4">
      {/* Main Book Detail Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Left side - Images */}
        <div className="w-full md:w-2/5">
          {/* Main selected image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 h-96 relative">
            <img 
              src={book.images[selectedImage] || "/api/placeholder/400/320"} 
              alt={book.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnail images */}
          <div className="grid grid-cols-4 gap-2">
            {book.images.map((image, index) => (
              <div 
                key={index}
                className={`h-20 cursor-pointer rounded overflow-hidden border-2 ${selectedImage === index ? 'border-purple-600' : 'border-transparent'}`}
                onClick={() => handleImageChange(index)}
              >
                <img 
                  src={image || "/api/placeholder/100/100"} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Right side - Book details */}
        <div className="w-full md:w-3/5">
          <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {'★'.repeat(Math.floor(book.rating))}
              {book.rating % 1 !== 0 && '½'}
              {'☆'.repeat(5 - Math.ceil(book.rating))}
            </div>
            <span className="text-gray-500 ml-2">({book.reviews})</span>
          </div>
          
          <div className="text-2xl font-bold mb-4">Rs {book.price}</div>
          
          <p className="text-gray-600 mb-6">{book.description}</p>
          
          {/* Seller info */}
          <div className="flex items-center mb-6">
            <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-xs">S</span>
            </div>
            <div>
              <div className="font-medium">{book.seller}</div>
              <div className="text-sm text-gray-500">{book.timeAgo}</div>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col gap-3">
            <div className='flex gap-2'>

            <button 

              className="bg-bgPrimary text-white px-6 py-3 rounded-md font-medium flex-1"
              onClick={handleBuyNow}
              >
              Buy Now
            </button>
            <div
            
            className='p-4 border border-bgPrimary rounded-lg'>

            <img 
            onClick={()=>navigate('/communication')}
            src={messageIcon}alt="message" className="w-6 h-6 cursor-pointer" />
            </div>
                </div>
            <button className="border border-bgPrimary text-bgPrimary px-6 py-3 rounded-md font-medium flex-1">
              Request
            </button>
          </div>
          
          {/* Contact options modal */}
          {showContactOptions && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-80">
                <h3 className="text-xl font-bold mb-4">Contact Seller</h3>
                
                <div className="space-y-4">
                  <button 
                    className="w-full py-3 bg-green-500 text-white rounded-lg flex items-center justify-center gap-2"
                    onClick={redirectToWhatsApp}
                  >
                    <img src={messageIcon} alt="WhatsApp" className="w-6 h-6" />
                    <span>WhatsApp</span>
                  </button>
                  
                  <button 
                    className="w-full py-3 bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2"
                    onClick={redirectToCall}
                  >
      <i className={`fas fa-phone text-gray-500 mr-2`}></i>
                    
                    <span>Call</span>
                  </button>
                  
                  <button 
                    className="w-full py-2 border border-gray-300 rounded-lg"
                    onClick={() => setShowContactOptions(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* More From This Seller Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">More From This Seller</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {moreBooksFromSeller.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={item.image || "/api/placeholder/300/200"} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-3">
                <div className="font-bold">Rs {item.price.toLocaleString()}</div>
                <div className="text-sm line-clamp-2">{item.title}</div>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <span>{item.seller}</span>
                  <span className="mx-1">•</span>
                  <span>{item.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recommendation Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recommendation For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {recommendedBooks.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={item.image || "/api/placeholder/300/200"} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-3">
                <div className="font-bold">Rs {item.price.toLocaleString()}</div>
                <div className="text-sm line-clamp-2">{item.title}</div>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <span>{item.seller}</span>
                  <span className="mx-1">•</span>
                  <span>{item.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SelectedBookScreen