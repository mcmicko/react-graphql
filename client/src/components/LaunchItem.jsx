import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

const LaunchItem = ({
  launch: {flight_number, mission_name, launch_date_local, launch_success}
}) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <h4>mission: <span className={classNames({
          'text-success': launch_success,
          'text-danger': !launch_success})}></span> {mission_name}</h4>
        <p>date: <Moment format='YYYY-MM-DD HH:mm'>{launch_date_local}</Moment></p>
      </div>
      <div className="col-md-3">
        <Link to={`/launch/${flight_number}`} className='btn btn-success'>details</Link>
      </div>
    </div>
  )
}

export default LaunchItem
