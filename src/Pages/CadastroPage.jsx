import React from 'react';
import Nav from '../Components/Nav';
import NewsletterSection from '../Components/Newsletter';
import Footer from '../Components/footer';
import RegisterSection from '../Components/Cadastro';


function CadastroPage() {
    return (
        <div>  
            <Nav /> 
            <RegisterSection />
            <NewsletterSection />
            <Footer />
        </div>
    );
}
export default CadastroPage;