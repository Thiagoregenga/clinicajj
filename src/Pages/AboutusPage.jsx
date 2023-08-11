import React from 'react';
import Nav from '../Components/Nav';
import Hero2 from '../Components/Hero2';
import Mission from'../Components/Mission';
import NewsletterSection from '../Components/Newsletter';
import Footer from '../Components/footer';
import Aesthetics from '../Components/Aesthetics';
import Photos from '../Components/Photos';

function AboutusPage() {
    return (
        <div>  
            <Nav /> 
            <Hero2 />
            <Mission/>
            <Photos/>
            <Aesthetics/>
            <NewsletterSection />
            <Footer />
        </div>
    );
}
export default AboutusPage;