import React, { useState } from 'react';
import ServiceSelector from './ServiceSelector';
import ProfessionalSelector from './ProfessionalSelector';
import DaySelector from './DaySelector';
import TimeSelector from './TimeSelector';
import SubmitButton from './SubmitButton';
import styles from './BookingTable.module.css';

function BookingTable() {
    const [appointment, setAppointment] = useState({
        service: '',
        professional: '',
        day: '',
        time: ''
    });

    const handleChange = (name, value) => {
        setAppointment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Appointment details:', appointment);
    };

    return (
        <table className={styles.table}>
            <tbody>
                <tr>
                    <td className={styles.td}><ServiceSelector onChange={handleChange} /></td>
                    <td className={styles.td}><ProfessionalSelector onChange={handleChange} /></td>
                    <td className={styles.td}><DaySelector onChange={handleChange} /></td>
                    <td className={styles.td}><TimeSelector onChange={handleChange} /></td>
                    <td className={styles.td}><SubmitButton onSubmit={handleSubmit} /></td>
                </tr>
            </tbody>
        </table>
    );
}

export default BookingTable;
