import css from './ImageCard.module.css';

const ImageCard = ({item}) => {
  return (
    <div className={css['image-wrap']}>
      <img src={item.urls.small} alt="" />
    </div>
  );
};
export default ImageCard;
