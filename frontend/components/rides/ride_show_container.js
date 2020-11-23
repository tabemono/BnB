import { fetchRide } from '../../actions/ride_actions';
import { connect } from 'react-redux';
import RideShow from './ride_show';


const mstp = (state, ownProps) => {
    const ride = state.entities.rides[ownProps.match.params.rideId];
    //possibly put owner of bike later

    return {
        ride
    }
}
const mdtp = (dispatch) => ({
   fetchRide: (rideId) => dispatch(fetchRide(rideId)),
 });

export default connect(mstp, mdtp)(RideShow);