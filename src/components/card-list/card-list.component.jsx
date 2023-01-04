//import { Component } from "react";

import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {
        // returning each monster as a seperate component
        monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <Card
                className="monster-card"
                id={monster.id}
                name={monster.name}
                email={monster.email}
              />
            </div>
          );
        })
      }
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {
//           // returning each monster as a seperate component
//           monsters.map((monster) => {
//             return (
//               <Card
//                 className="monster-card"
//                 id={monster.id}
//                 name={monster.name}
//                 email={monster.email}
//               />
//             );
//           })
//         }
//       </div>
//     );
//   }
// }

export default CardList;
