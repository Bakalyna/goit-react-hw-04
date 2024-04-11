import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ gallery,openModal }) => {
  return (
    <ul className={css['image-list']}>
          {gallery.map(item => {
          
        return (
          <li key={item.id}>
            <ImageCard item={item} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
