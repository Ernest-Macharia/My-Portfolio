import React from 'react'
import { Link } from 'react-router-dom';
function Projectcard(props) {
    return (
        <>
           <li className="cards__item">
                            <a className="cards__item__link" href={props.path} target="_blank">
                                <figure className="cards__item__pic-wrap">
                                   <img src={props.src} alt="my Image" className="cards__item__img" />
                                </figure>
                                <div className='cards__item__info'>
                                    <h5 className='cards__item__text'>{props.text}</h5>
                                </div>
                            </a>
                        </li>  
        </>
    )
}

export default Projectcard;


