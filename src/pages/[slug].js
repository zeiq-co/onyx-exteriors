import groq from 'groq';
import sanity from '../utils/sanity';

const Post = ({ title, imageUrl }) => {
  return (
    <article>
      <img src={imageUrl} alt={title} />
    </article>
  );
};

const query = groq`*[_type == "gallery" && slug.current == $slug][0]{
  title,
  "imageUrl": image.asset->url
}`;

Post.getInitialProps = async context => {
  const { slug = '' } = context.query;
  const data = await sanity.fetch(query, { slug });
  return data;
};

export default Post;
