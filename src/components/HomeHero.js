import styled from 'styled-components';

const Section = styled.section`
  figure {
    display: inline-block;
  }
`;

const HomeHero = () => (
  <Section className="hero has-text-centered is-bold">
    <div className="hero-body">
      <div className="container">
        <figure className="image is-128x128">
          <img className="is-rounded" src="/static/avatar.png" alt="" />
        </figure>
        <h1 className="title">Primary bold title</h1>
        <h2 className="subtitle">Primary bold subtitle</h2>
      </div>
    </div>
  </Section>
);

export default HomeHero;
