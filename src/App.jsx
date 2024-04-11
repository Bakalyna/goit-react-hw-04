import { useState, useEffect } from 'react';
import './App.css';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import fetchImg from './apiGallery/api-gallery';
import Loader from './components/Loader/Loader';

function App() {
  const [query, setQuery] = useState('');
  const [gallery, setGallery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showloader, setShowLoader] = useState(false);
  const [showError, setShowError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = query => {
    setGallery([]);
    setCurrentPage(1);
    setQuery(query);
  };

  useEffect(() => {
    if (!query) return;
    async function getImages() {
      setShowLoader(true);
      const data = await fetchImg(query, currentPage);
      setGallery([...gallery, ...data.results]);
      setShowError(!data.results.length);
      setShowLoader(false);
      
    }
    getImages();
  }, [query, currentPage]);

  const visibleLoadMore = gallery.length !== 0;

  function openModal(image) {
    setModalImg(image);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      {showloader && <Loader />}
      {!showError && <ImageGallery gallery={gallery} openModal={openModal} />}
      {showError && <ErrorMessage />}
      {visibleLoadMore && <LoadMoreBtn loadMore={loadMore} />}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          modalImg={modalImg}
        />
      )}
    </>
  );
}

export default App;
