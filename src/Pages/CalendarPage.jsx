import React from 'react';
import Nav from '../Components/Nav';
import NewsletterSection from '../Components/Newsletter';
import Footer from '../Components/footer';
import BookingTable from '../Components/BookingTable';

function CalendarPage() {
    return (
        <div>  
            <Nav /> 
            <BookingTable/>
            <NewsletterSection />
            <Footer />
        </div>
    );
}

export default CalendarPage;
