import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render various fields of user in UI
 */
const PearsonUser = (props) => {
     const { first_name, last_name, avatar } = props.user;

     return (
          <div className="wrapper">
               <img className="avatar" src={avatar} alt={first_name} />
               <div className="title">{first_name} {last_name}</div>
               <div className="delete" onClick={props.deleteUser}>Delete</div>
          </div>
     );


}

PearsonUser.propTypes = {
     avatar: PropTypes.string,
     first_name: PropTypes.string,
     last_name: PropTypes.string
};
export default PearsonUser;
