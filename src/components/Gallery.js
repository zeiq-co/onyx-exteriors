import GalleryItems from './GalleryItem';

const Gallery = ({ images }) => (
  <div className="section">
    <div className="container">
      <div className="columns is-multiline">
        {images.map(items => (
          <GalleryItems item={items} />
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;
