import React from "react";
import CharacterCard from '../../../components/CharacterCard/CharacterCard';
import CharacterSearch from '../../../components/SearchCard/characterSearch';
import CharacterLocations from '../../../components/SearchCard/characterLocations';



class CardsPage extends React.Component{ 
    state = {
        characterCards:[],
        rickMorty:[],
        locations:[]
    };

    getData = () => {
        fetch( 'https://rickandmortyapi.com/api/character/' ).then(
            response => response.json()
        ).then(
            data => {
                console.log(data);
                this.setState({
                        characterCards: [...data.results],
                        rickMorty: [...data.results],
                        locations:[...data.results]
                    }
                )
            }
        )
    }
//Character
    handleSearchTerm = (searchTerm) => {
        this.filterCharacterCards(searchTerm);
    }

//gender
    handleSearchLocation = (searchPlace) => {
        this.filterCharacterPlace(searchPlace);
    }


//Character
    filterCharacterCards = (term) => {
        const characters = this.state.rickMorty.filter(char => {

            return char.name.toLowerCase().includes(term.trim().toLowerCase());   
        }) 
        this.setState({
            characterCards: characters,
        });
    }

//gender
    filterCharacterPlace = (terms) => {
        const sex = this.state.locations.filter(charL => {

            return charL.gender.toLowerCase().includes(terms.trim().toLowerCase());
        })
        this.setState({
            characterCards: sex
        })
    }




componentDidMount(){
    this.getData();
}

    render(){
        let characters = null;
        if( this.state.characterCards.length > 0) {
            characters = this.state.characterCards.map(character =>(
                <CharacterCard
                    key={character.id}
                    id={character.id}
                    image={character.image}
                    name={character.name}
                    species={character.species}
                    status={character.status}
                    gender={character.gender}
                    location={character.location.name}
                    origin={character.origin.name}
                    showLink={true}
                    >
                </CharacterCard>
            ));
        }else{
            characters = <p>Loading...</p>;
        };


        return(
            <React.Fragment >
                <br></br>
              
                <CharacterSearch onSearchTerm={this.handleSearchTerm} />
                
                <h4 className="text-center title">Or</h4>
                <CharacterLocations onSearchPlace={this.handleSearchLocation} />
                <br />
                <div className="row">{ characters }</div>
                <br /> <br />
            </React.Fragment>
       
        )
    }

};

export default CardsPage;