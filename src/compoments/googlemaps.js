import { Map, GoogleApiWrapper } from 'google-maps-react';


const Map = () => {

    function render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            />
        );
    }
    return (

        <>test</>
    )
}

export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
})(MapContainer);


