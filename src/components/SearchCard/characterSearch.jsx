import React from "react"

const characterSearch = (props) => {
    const searchInput = React.createRef()
        const handleCharacterSearch = () => {
            const searchValue = searchInput.current;
            props.onSearchTerm(searchValue.value);
        }
        return(
            <div className='search'>
                <input type='text'
                ref={searchInput}
                onChange={handleCharacterSearch}
                className='form-control'
                placeholder='Search for a Rick &
                Morty character' />
            </div>
        )
}

export default characterSearch;