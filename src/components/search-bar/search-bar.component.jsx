//import { Component } from "react";

import "./search-bar.styles.css";

const SearchBar = ({ onChangeHandler, className, placeholder }) => {
  return (
    <input
      className={`search-bar ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

// class SearchBar extends Component {
//   render() {
//     const { onChangeHandler, className, placeholder } = this.props;

//     return (
//       <input
//         className={`search-bar ${className}`}
//         type="search"
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBar;
