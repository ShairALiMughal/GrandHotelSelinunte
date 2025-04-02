import React from 'react'
import { Link } from 'react-router-dom';

function RoomCardFive(props) {
    const { roomID, roomImage, roomTitle, roomPrice } = props;
    return (
        <>
            <div className="room__card">
                <div className="room__card__top">
                    <div className="room__card__image">
                        <Link to={`/room2/${roomID}`}>
                            <img
                                src={`assets/images/pages/room/${roomImage}`}
                                width={420}
                                height={310}
                                alt="room card"
                            />
                        </Link>
                    </div>
                </div>
                <div className="room__card__meta">
                    <Link to={`/room2/${roomID}`} className="room__card__title h5" >
                        {roomTitle ? roomTitle : 'Deluxe Room'}
                    </Link>
                    <div className="room__card__meta__info">
                        <span>
                            <i className="flaticon-construction" />
                            35 sqm
                        </span>
                        <span>
                            <i className="flaticon-user" />5 Person
                        </span>
                    </div>
                    <div className="room__price__tag">
                        <span className="h6 d-block">{roomPrice ? roomPrice : '120$'}</span>
                    </div>
                    <Link to={`/room2/${roomID}`} className="room__card__link">
                        Discover More
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RoomCardFive