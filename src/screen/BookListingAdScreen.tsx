import { useState } from 'react';
import { Book1, Book2, Book3 } from '../assets/icons';

const BookListingAdScreen = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample book data
  const books = [
    {
      id: 1,
      title: "Instant Communication with Real-Time Messaging",
      price: 22500,
      image: Book1,
      location: "Prem Nagar, Lahore",
      timeAgo: "1 day ago",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into...",
      status: "active"
    },
    {
      id: 2,
      title: "Instant Communication with Real-Time Messaging",
      price: 22500,
      image: Book3,
      location: "Prem Nagar, Lahore",
      timeAgo: "1 day ago",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into...",
      status: "sold"
    },
    {
      id: 3,
      title: "Instant Communication with Real-Time Messaging",
      price: 22500,
      image: Book2,
      location: "Prem Nagar, Lahore",
      timeAgo: "1 day ago",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into...",
      status: "paused"
    },
    {
      id: 4,
      title: "Instant Communication with Real-Time Messaging",
      price: 22500,
      image: Book1,
      location: "Prem Nagar, Lahore",
      timeAgo: "1 day ago",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into...",
      status: "pending"
    }
  ];
  
  // Filter books based on active tab
  const getFilteredBooks = () => {
    if (activeTab === 'all') return books;
    return books.filter(book => book.status === activeTab);
  };
  
  // Get action buttons based on book status
  const getActionButtons = (book:any) => {
    switch (book.status) {
      case 'active':
        return (
          <div className="flex space-x-2">
            <button className="bg-bgPrimary text-white px-3 py-1 rounded text-sm">Mark as Sold</button>
            <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm">Pause</button>
            <button className="bg-white border border-gray-300 text-gray-800 px-3 py-1 rounded text-sm">Edit</button>
          </div>
        );
      case 'sold':
        return (
          <div className="flex space-x-2">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Sold</span>
          </div>
        );
      case 'paused':
        return (
          <div className="flex space-x-2">
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Activate</button>
            <button className="bg-white border border-gray-300 text-gray-800 px-3 py-1 rounded text-sm">Edit</button>
          </div>
        );
      case 'pending':
        return (
          <div className="flex space-x-2">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm">Pending</span>
            <button className="bg-white border border-gray-300 text-gray-800 px-3 py-1 rounded text-sm">Cancel Request</button>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="w-full min-h-screen overflow-auto mx-auto py-4 px-8 md:px-20">
      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex overflow-x-auto whitespace-nowrap">
          <button 
            className={`py-3 px-4 text-sm font-medium ${activeTab === 'all' ? 'border-b-2 border-bgPrimary text-bgPrimary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`py-3 px-4 text-sm font-medium ${activeTab === 'active' ? 'border-b-2 border-bgPrimary text-bgPrimary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('active')}
          >
            My Active Books
          </button>
          <button 
            className={`py-3 px-4 text-sm font-medium ${activeTab === 'sold' ? 'border-b-2 border-bgPrimary text-bgPrimary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('sold')}
          >
            Sold
          </button>
          <button 
            className={`py-3 px-4 text-sm font-medium ${activeTab === 'purchased' ? 'border-b-2 border-bgPrimary text-bgPrimary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('purchased')}
          >
            Purchased
          </button>
          <button 
            className={`py-3 px-4 text-sm font-medium ${activeTab === 'pending' ? 'border-b-2 border-bgPrimary text-bgPrimary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('pending')}
          >
            Requests
          </button>
          <button 
            className={`py-3 px-4 text-sm font-medium ${activeTab === 'paused' ? 'border-b-2 border-bgPrimary text-bgPrimary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('paused')}
          >
            Paused
          </button>
        </div>
      </div>
      
      {/* Book listings */}
      <div className="space-y-4">
        {getFilteredBooks().map((book) => (
          <div key={book.id} className="shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
            {/* Book image */}
            <div className="w-full md:w-60 h-52 md:h-auto rounded-lg flex-shrink-0">
              <img 
                src={book.image || "/api/placeholder/160/200"} 
                alt={book.title} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Book details */}
            <div className="flex flex-col p-4 flex-grow justify-between">
              <div>
                {/* Price and favorite button */}
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold">Rs {(book.price / 1000).toFixed(3).replace('.', ',')}</h2>
                  <button className="text-gray-400 hover:text-red-500">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
                
                {/* Title */}
                <h3 className="font-semibold mb-2">{book.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{book.description}</p>
                
                {/* Location and time */}
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <i className="fas fa-map-marker-alt mr-1"></i>
                  <span>{book.location}</span>
                </div>
                
                <div className="text-gray-500 text-sm">
                  {book.timeAgo}
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="mt-4">
                {getActionButtons(book)}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty state */}
      {getFilteredBooks().length === 0 && (
        <div className="text-center py-10">
          <i className="fas fa-book-open text-gray-300 text-5xl mb-4"></i>
          <p className="text-gray-500">No books found in this category</p>
        </div>
      )}
    </div>
  );
};

export default BookListingAdScreen;