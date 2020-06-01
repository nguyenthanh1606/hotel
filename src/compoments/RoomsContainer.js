import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';
import Loading from '../compoments/Loading';
import Title from './Title';

const RoomsContainer = ({ context }) => {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <Title title="search room" />
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomsContainer);


// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import {RoomConsumer} from '../context';
// import Loading from '../compoments/Loading';
// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const {loading, sortedRooms, rooms} = value;
//                 if(loading){
//                     return <Loading/>
//                 }
//                 return(
//                     <div>
//                         Hello Rooms Container from compoment
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
//                 );
//             }}
//         </RoomConsumer>

//     );
// }

// export default RoomsContainer;
