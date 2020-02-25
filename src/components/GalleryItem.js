import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import styled from 'styled-components';
import sanity from '../utils/sanity';

function urlFor(source) {
  return imageUrlBuilder(sanity).image(source);
}

const BOX = styled.div`
  transition: all 0.4s;
  :hover {
    transform: scale(1.05);
  }
  .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  :hover .image {
    opacity: 0.3;
  }

  :hover .middle {
    opacity: 1;
  }
`;

const GalleryItems = ({ item }) => (
  <Link href={item.slug.current}>
    <BOX className="column is-6">
      <figure className="image is-square">
        <img src={urlFor(item.image.asset)} alt=""></img>
      </figure>
      <div className="middle">
        <h1 className="title is-1">{item.title}</h1>
      </div>
    </BOX>
  </Link>
);

export default GalleryItems;
