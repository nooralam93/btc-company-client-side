import React from 'react';
import ShowroomHeader from '../ShowroomHeader/ShowroomHeader';
import ShowroomProducts from '../ShowroomProducts/ShowroomProducts';

const Showroom = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div style={{ mb: 5 }}>
            {/* <Header></Header> */}
            <ShowroomHeader date={date} setDate={setDate}></ShowroomHeader>
            <ShowroomProducts date={date}></ShowroomProducts>
        </div>
    );
};

export default Showroom;