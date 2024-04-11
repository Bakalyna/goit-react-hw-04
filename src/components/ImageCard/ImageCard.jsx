import css from './ImageCard.module.css';

const ImageCard = ({ item, openModal }) => {
  return (
    <div className={css['image-wrap']}>
      <img
        src={item.urls.small}
        alt={item.alternative_slugs.en}
        onClick={() => {
          openModal(item);
        }}
      />
    </div>
  );
};
export default ImageCard;
