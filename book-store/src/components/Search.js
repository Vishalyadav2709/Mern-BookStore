import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css";
var data = require("./MOCK_DATA.json");

export default function App() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
   
    

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} placeholder='Search Books' />
          <button onClick={() => onSearch(value)} className="button"><NavLink to= '/books' className='Navlink'> <SearchIcon /> </NavLink> </button>
        </div>
        <div className="dropdown">
          <NavLink to = '/books' className='Navlink'>
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
            </NavLink>
        </div>
      </div>
    
  );
}
