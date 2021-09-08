import React from 'react';
import {Link} from 'react-router-dom';
import './Boxes.css';


function Boxitem(props) {
    return (
    <>
    <li className='boxes_item'>
    <Link className='boxes_item_link' to={props.path}>
        <figure className='boxes_item_pic-wrap' data-category={props.label}> 
        <img src={props.src} alt='Destination Image'
        className='boxes_item_img'/>
        </figure>
        <div className='boxes_item_info'>
        <h5 className='boxes_item_text' >{props.text}</h5>
            
        </div>
    </Link>
    </li>
    </>
    );
}

export default Boxitem;
