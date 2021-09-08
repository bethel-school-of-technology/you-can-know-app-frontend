import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;





// import React from 'react';
// import {Link} from 'react-router-dom';
// import './Cards.css';


// function Carditem(props) {
//     return (
//     <>
//     <li className='cards_item'>
//     <Link className='cards_item_link' to={props.path}>
//         <figure className='cards_item_pic-wrap' data-category={props.label}> 
//         <img src={props.src} alt='Destination Image'
//         className='cards_item_img'/>
//         </figure>
//         <div className='cards_item_info'>
//         <h5 className='cards_item_text' >{props.text}</h5>
            
//         </div>
//     </Link>
//     </li>
//     </>
//     );
// }

// export default Carditem;
