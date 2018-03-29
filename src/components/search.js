import React, {Component} from 'react';

//Functional Component
// const SearchBar = () => {
//   return <input />;
// };


//Class Component
class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  render(){
    //Always manipulate state using setState, never using this.state.term = ...
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value})} />
      </div>

    )
  }


}


export default SearchBar;
