import { Link } from 'react-router-dom';
import { Book1, Book2, Book3 } from '../assets/icons';

// Book Card Component
const BookCard = ({ book }:any) => {
  return (
    <div className=" min-h-fit rounded-lg overflow-hidden h-[300px] shadow-lg">
      <div className="relative ">
        <img 
          src={book.image || "/api/placeholder/200/240"} 
          alt={book.title} 
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
          <i className="far fa-heart"></i>
        </button>
      </div>
      <div className="p-3 ">
        <div className="font-bold text-xl text-bgPrimary">Rs {book.price.toLocaleString()}</div>
        <div className="text-lg line-clamp-2 ">{book.title}</div>
        <div className="flex items-center text-sm text-gray-700 mt-1">
          <i className="fas fa-map-marker-alt mr-1"></i>
          <span>{book.location}</span>
        </div>
        <div className="text-sm text-gray-700 mt-1">
          {book.timeAgo}
        </div>
      </div>
    </div>
  );
};

// Book Category Section Component
const BookCategorySection = ({ title, books, genreId }:any) => {
  return (
    <div className="mb-8 ">
      <div className="flex  justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link to={`/genre/${genreId}`} className="text-blue-600 text-sm font-medium">
          View All
        </Link>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 min-h-fit">
        {books.map((book:any) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

const BookHomeScreen = () => {
  // Sample data structure with multiple genres
  const booksByGenre = {
    popularBooks: {
      id: 'popular',
      title: 'Most Popular Books',
      books: [
        {
          id: 1,
          title: "Instant Communication with Real-Time Messaging",
          price: 22500,
          image: Book1,
          location: "Prem Nagar, Lahore",
          timeAgo: "1 day ago",
        },
        {
          id: 2,
          title: "Instant Communication with Real-Time Messaging",
          price: 22500,
          image: Book1,
          location: "Prem Nagar, Lahore",
          timeAgo: "1 day ago",
        },
        {
          id: 3,
          title: "Instant Communication with Real-Time Messaging",
          price: 22500,
          image: Book1,
          location: "Prem Nagar, Lahore",
          timeAgo: "1 day ago",
        },
        {
          id: 4,
          title: "Instant Communication with Real-Time Messaging",
          price: 22500,
          image: Book1,
          location: "Prem Nagar, Lahore",
          timeAgo: "1 day ago",
        }
      ]
    },
    dictionaries: {
      id: 'dictionaries',
      title: 'Dictionaries',
      books: [
        {
          id: 5,
          title: "Instant Communication with Real-Time Messaging",
          price: 22500,
          image: Book2,
          location: "Prem Nagar, Lahore",
          timeAgo: "1 day ago",
        },
        {
          id: 6,
          title: "Instant Communication with Real-Time Messaging",
          price: 22500,
          image: Book2,
          location: "Prem Nagar, Lahore",
          timeAgo: "1 day ago",
        },
        {
          id: 7,
          title: "Instant Communication with Real-Time Messaging",
          price: 22500,
          image: Book2,
          location: "Prem Nagar, Lahore",
          timeAgo: "1 day ago",
        },
        {
          id: 8,
          title: "Instant Communication with Real-Time Messaging",
          price: 22500,
          image: Book2,
          location: "Prem Nagar, Lahore",
          timeAgo: "1 day ago",
        }
      ]
    },
    recommendedBooks: {
      id: 'recommended',
      title: 'Books You Might Like',
      books: [
        {
          id: 9,
          title: "Instant Communication with Real-Time Messaging",
          price: 22500,
          image: Book3,
          location: "Prem Nagar, Lahore",
          timeAgo: "1 day ago",
        },
        {
          id: 10,
          title: "Instant Communication with Real-Time Messaging",
          price: 22500,
          image: Book3,
          location: "Prem Nagar, Lahore",
          timeAgo: "1 day ago",
        },
        {
          id: 11,
          title: "Instant Communication with Real-Time Messaging",
          price: 22500,
          image: Book3,
          location: "Prem Nagar, Lahore",
          timeAgo: "1 day ago",
        },
        {
          id: 12,
          title: "Instant Communication with Real-Time Messaging",
          price: 22500,
          image: Book3,
          location: "Prem Nagar, Lahore",
          timeAgo: "1 day ago",
        }
      ]
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 mx-auto px-16">
      {/* Popular Books Section */}
      <BookCategorySection 
        title={booksByGenre.popularBooks.title} 
        books={booksByGenre.popularBooks.books} 
        genreId={booksByGenre.popularBooks.id}
      />
      
      {/* Dictionaries Section */}
      <BookCategorySection 
        title={booksByGenre.dictionaries.title} 
        books={booksByGenre.dictionaries.books}
        genreId={booksByGenre.dictionaries.id}
      />
      
      {/* Recommended Books Section */}
      <BookCategorySection 
        title={booksByGenre.recommendedBooks.title} 
        books={booksByGenre.recommendedBooks.books}
        genreId={booksByGenre.recommendedBooks.id}
      />
    </div>
  );
};

export default BookHomeScreen;