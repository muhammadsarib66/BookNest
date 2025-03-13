import { Book1, Book2, Book3 } from '../assets/icons';

const LikedBooks = () => {
  
  // Modified book data with user details
  const books = [
    {
      id: 1,
      title: "Instant Communication with Real-Time Messaging",
      price: 22500,
      image: Book1,
      location: "Prem Nagar, Lahore",
      timeAgo: "1 day ago",
      description: "Lorem Ipsum is simply dummy text...",
      isAvailable: true,
      user: {
        name: "John Doe",
        image: "https://placehold.co/200x/ffa8e4/ffffff.svg?text=JD",
        status: "online" // or "offline"
      }
    },
    {
      id: 2,
      title: "Instant Communication with Real-Time Messaging",
      price: 22500,
      image: Book3,
      location: "Prem Nagar, Lahore",
      timeAgo: "1 day ago",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into...",
      isAvailable: false,
      user: {
        name: "Jane Smith",
        image: "https://placehold.co/200x/ffa8e4/ffffff.svg?text=JS",
        status: "offline"
      }
    },
    {
      id: 3,
      title: "Instant Communication with Real-Time Messaging",
      price: 22500,
      image: Book2,
      location: "Prem Nagar, Lahore",
      timeAgo: "1 day ago",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into...",
      isAvailable: true,
      user: {
        name: "Alice Johnson",
        image: "https://placehold.co/200x/ffa8e4/ffffff.svg?text=AJ",
        status: "online"
      }
    },
    {
      id: 4,
      title: "Instant Communication with Real-Time Messaging",
      price: 22500,
      image: Book1,
      location: "Prem Nagar, Lahore",
      timeAgo: "1 day ago",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into...",
      isAvailable: false,
      user: {
        name: "Bob Brown",
        image: "https://placehold.co/200x/ffa8e4/ffffff.svg?text=BB",
        status: "offline"
      }
    }
  ];

  // Simplified action buttons with edit and user details
  const getActionButtons = (book: any) => {
    return (
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img 
            src={book.user.image} 
            alt={book.user.name} 
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-sm">{book.user.name}</p>
            <div className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${book.user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
              <span className="text-xs text-gray-500">{book.user.status}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <span className={`px-3 py-1 rounded text-sm ${book.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {book.isAvailable ? 'Available' : 'Not Available'}
          </span>
          <button className="bg-white border border-gray-300 text-gray-800 px-3 py-1 rounded text-sm">
            Edit
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen overflow-auto mx-auto py-4 px-8 md:px-20">
      {/* Simple header */}
      <h1 className="text-2xl font-bold mb-6">Liked Books</h1>
      
      {/* Book listings */}
      <div className="space-y-4">
        {books.map((book) => (
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
                  <button className="text-red-500 ">
                    <i className="fas fa-heart text-2xl"></i>
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
              
              {/* Updated action buttons with user details */}
              <div className="mt-4">
                {getActionButtons(book)}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty state */}
      {books.length === 0 && (
        <div className="text-center py-10">
          <i className="fas fa-book-open text-gray-300 text-5xl mb-4"></i>
          <p className="text-gray-500">No books found in this category</p>
        </div>
      )}
    </div>
  );
};

export default LikedBooks;