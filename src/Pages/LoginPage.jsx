import React from 'react';
import Nav from '../Components/Nav';
import Login from '../Components/Login';

import NewsletterSection from '../Components/Newsletter';
import Footer from '../Components/footer';


function LoginPage() {
    return (
        <div>  
            <Nav /> 
            <Login />
            <NewsletterSection />
            <Footer />
        </div>
    );
}
export default LoginPage;