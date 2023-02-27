import React from 'react';
import ReactSearchBox from "react-search-box";
import '../App.css';


function Search() {
    return (
      <div className="App">
          <ReactSearchBox
            placeholder="Search for an organization"
            data={[
            {
            key: "Make a wish foundation",
            value: "Make a Wish Foundation"
            },
            {
                key: "World Wildlife Fund",
                value: "World Wildlife Fund"
            },
            {
                key: "Wounded Warriro Project",
                value: "Wounded Warriro Project"
            }
            ]}
            onSelect={(record) => console.log(record)}
            onFocus={() => {
            console.log("This function is called when is focussed");
            }}
            onChange={(value) => console.log(value)}
            autoFocus
            leftIcon={<>🔎</>}
            iconBoxSize="48px"
            />
      </div>
    );
  }
  
  export default Search;

