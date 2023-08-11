import React from 'react';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import NewsletterSection from '../Components/Newsletter';
import Footer from '../Components/footer';
import Description from '../Components/Description';

function HomePage() {
    return (
        <div>
            <Nav />
            <Hero />
            <Services/>
            <Description />
            <NewsletterSection />
            <Footer />
        </div>
    );
}

export default HomePage;