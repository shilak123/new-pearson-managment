import React from 'react';

const PearsonUser = (props) => {
     const { first_name, last_name, avatar } = props.user;

     return (
          <div className="wrapper">
               <img className="avatar" src={avatar} alt={first_name} />
               <p className="title">{first_name} {last_name}</p>
               <span className="delete" onClick={props.deleteUser}>Delete</span>
          </div>
     );


}
export default PearsonUser;
