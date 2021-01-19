import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar_container';
import SearchMapContainer from '../map/search_map_container';
import Search from '../search_bar/search_index';

class Ride extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updateToggle: false,
        }
        
        this.updateRideToggle = this.updateRideToggle.bind(this);
    }

    updateRideToggle() {

        if(this.state.updateToggle === true) {
            this.ssetState({updateToggle: false});
        } else {
            this.setState({updateToggle: true});
        }
    }


    render() {
        <div className='ride-page'>
            <header className='header'>
           <Search updateRideToggle={this.updateRideToggle}/>
            <NavBar/>
            </header>
           <SearchMapContainer/>
        </div>
    }
}

export default Ride;