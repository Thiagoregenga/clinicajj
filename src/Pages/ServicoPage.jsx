import React from 'react';
import Nav from '../Components/Nav';
import NewsletterSection from '../Components/Newsletter';
import Footer from '../Components/footer';
import ProceduresComponent from '../Components/ProceduresComponent';
import ProfessionalsComponent from '../Components/ProfessionalsComponent';
import Hero2 from '../Components/Hero2';

function ServPage() {
    return (
        <div>
            <Nav />
            <Hero2/>
            <ProceduresComponent/>
            <ProfessionalsComponent/>
            <NewsletterSection />
            <Footer />
        </div>
    );
}
export default ServPage;