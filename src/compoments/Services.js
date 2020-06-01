import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

import Title from './Title';

class Sevices extends Component {

    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore."
            },
            {
                icon:<FaHiking/>,
                title:"Free Cocktails",
                info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore."
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Cocktails",
                info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore."
            },
            {
                icon:<FaBeer/>,
                title:"Free Beer",
                info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore."
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}

export default Sevices;
