
import Navbar from '../../components/Navbar';
import { Routes, Route } from 'react-router-dom';
import SelectedBookScreen from '../SelectedBookScreen';
import Footer from '../../components/Footer';
import BooksMainScreen from './BooksMainScreen';
import ChatScreen from '../communication/ChatScreen';
import BookListingAdScreen from '../BookListingAdScreen';
import EditProfile from '../auth/EditProfile';
import LikedBooks from '../LikedBooks';
import PostBookAd from '../PostBookAd';
import GenreBooksScreen from '../GenreBooksScreen';

const Home = () => {
const location = window.location.pathname; 
  return (
    <>
        <Navbar />
    <div className='mt-20'>

    <Routes>
      <Route path="*" element={<BooksMainScreen />} />
      <Route path="/Books" element={<BooksMainScreen />} />
      <Route path="/selectedBook" element={<SelectedBookScreen />} />
      <Route path="/communication" element={<ChatScreen />} />
      <Route path="/my-books-listing" element={<BookListingAdScreen/>} />
      <Route path="/edit-profile" element={<EditProfile/>} />
      <Route path="/liked-books" element={<LikedBooks/>} />
      <Route path="/Post-new-book-ad" element={<PostBookAd/>} />
      <Route path="/genre/:genreId" element={<GenreBooksScreen />} />
    </Routes>
    {
      location == '/communication' ?   "" : <Footer />
    }
  
    </div>
    </>
    

  );
};

export default Home;