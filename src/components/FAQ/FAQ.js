import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContent} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero image={faqContent.image} />
    <h2>{faqContent.header}</h2>
    <p>{faqContent.description}</p>
  </Container>
);

export default FAQ;