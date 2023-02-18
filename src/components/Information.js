import PropTypes from 'prop-types';
export const Information = ({ info: {avatar, username, tag, location} }) => {
    return (
    <div>
        <img src= {avatar} alt= {username} with="240"/>
        <p> {username} </p>
        <p> {tag} </p>
        <p> {location} </p>
    </div>
    );
};

Information.protoType = {
info: PropTypes.string.isRequired
}