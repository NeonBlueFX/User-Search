import { useState } from "react";

const SearchBar = ({ filteredusers }) => {


      const sendDataToParent = (data) => {
        const dataToSend = data.target.value;
        console.log(data.target.value)
        filteredusers(dataToSend); 
      };
    return (
        <div>
            <input onChange={(event) => sendDataToParent(event)} className=" shadow-xl bg-white w-[700px] h-[40px] rounded-xl p-2"></input>
        </div>

    )
}

export default SearchBar;