import React from "react"

const characterLocations = (props) => {

    const searchInput = React.createRef()

        const handleLocationSearch = () => {
            const searchValue = searchInput.current;
            props.onSearchPlace(searchValue.value);

        }

        return(
            <div className='search'>
                <input type='text'
                ref={searchInput}
                onChange={handleLocationSearch}
                className='form-control'
                placeholder='Search for Rick &
                Morty genders...you pervo' />
            </div>
        )
}

export default characterLocations;
