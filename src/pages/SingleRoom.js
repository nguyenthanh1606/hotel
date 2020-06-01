import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../compoments/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../compoments/StyledHero';

class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext;
    // componentDidMount() {

    // }    

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        if (!room) {
            return <div className="error">
                <h3>no such room could be found</h3>
                <Link className="btn-primary" to="/rooms">
                    back to rooms
                </Link>
            </div>
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
        const [mainImg, ...defaultImg] = images;
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link className="btn-primary" to='/rooms'>back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name}/>;
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Detail</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price : ${price}</h6>
                            <h6>Size : {size} SQFT</h6>
                            <h6>Max capacity : {capacity} people</h6>
                            <h6>{pets?'Pets allowed':'No pets allowed'}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}

export default SingleRoom;
