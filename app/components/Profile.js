import React from 'react';
import Router from 'react-router';

class Profile extends React.Component {

  constructor(props) {
     super(props);
      this.state = {
      notes: [],
      bio: {},
      repos: []
    };
  }
  render () {
    var {router}  = this.context;
    var username = router.getCurrentParams().username;
    return (
        <div className="row">
          <div className="col-md-4">
            User Profile Component ---> {username}
          </div>
          <div className="col-md-4">
            Repos Component
          </div>
          <div className="col-md-4">
            Notes Component
          </div>
        </div>
    )
  }
}

Profile.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Profile;
