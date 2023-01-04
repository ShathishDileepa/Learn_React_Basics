//import { Component } from "react";

import "./card.styles.css";

const Card = ({ className, name, id, email }) => {
  return (
    <div className={`card-container ${className}`} key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//   render() {
//     const { className, name, id, email } = this.props;

//     return (
//       <div className={`card-container ${className}`} key={id}>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         />
//         <h1>{name}</h1>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
