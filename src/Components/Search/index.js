import React, {useState} from 'react';

const SearchBox = ({onSearchValue}) => {

    const[searchValue, setSearchValue] = useState("")
    /// console.log("searchValue" , searchValue)

    const onSearch = () =>{
        onSearchValue(searchValue);       
    };

    return (
        <div className="input-group m-4">
            <div className="form-outline">
                <input 
                type="search" 
                id="form1" 
                value={searchValue}
                onChange = {
                    (e)=>setSearchValue
                    (e.target.value)
                }
                className="form-control" 
                placeholder="Search..." />
                
            </div>
            <button type="button" 
            onClick={onSearch}
            className="btn btn-primary">
                <i className="fas fa-search"></i>
            </button>
        </div>

    );
}

export default SearchBox;