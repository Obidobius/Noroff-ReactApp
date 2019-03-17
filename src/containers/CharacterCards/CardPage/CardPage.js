import React from "react"
//import ReactDOM from "react-dom"
import CharacterCard from '../../../components/CharacterCard/CharacterCard'



class CardPage extends React.Component{
    state = { 
        character: {}
    };

    getCharacterData = () => {
        fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`).then(result => result.json()
        ).then(
            data =>{
                this.setState({
                    character:data
                })
            }
        )
       
    };

    componentDidMount(){
        this.getCharacterData();

        
    };
        render(){
            let characterCard = null;

            if (this.state.character.id){
                characterCard = (<CharacterCard
                    key ={this.state.character.id}
                    id ={this.state.character.id}
                    image={this.state.character.image}
                    name={this.state.character.name}
                    species={this.state.character.species}
                    status={this.state.character.status}
                    gender={this.state.character.gender}
                    location={this.state.character.location.name}
                    origin={this.state.character.origin.name}></CharacterCard>);
            } else{
                characterCard = <p>Loading...</p>;
            }

            return(
                <React.Fragment>{characterCard}</React.Fragment>
            )
        }
};


export default CardPage;