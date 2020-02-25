import groq from 'groq';
import { NextSeo } from 'next-seo';

import sanity from '../utils/sanity';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import Gallery from '../components/Gallery';

function Index({ gallery }) {
  return (
    <Layout>
      <NextSeo
        title="Kickoff NextJs"
        description="A short description goes here."
      />
      <HomeHero />
      <Gallery images={gallery} />
    </Layout>
  );
}

Index.getInitialProps = async () => ({
  gallery: await sanity.fetch(groq`
  *[_type == "gallery"]
  `),
});

export default Index;
