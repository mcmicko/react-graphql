import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import classNames from 'classnames'

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local,
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`

export class Launch extends Component {
  render() {
    let {flight_number} = this.props.match.params
    flight_number = parseInt(flight_number)
    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{flight_number}}>
          {({loading, error, data}) => {
            if(loading) return <h4>loading...</h4>
            if(error) console.log(error);
            const {
              mission_name,
              flight_number,
              launch_year,
              launch_success,
              rocket: {rocket_id, rocket_name, rocket_type}
            } = data.launch;

            return (
              <div className="display-4 my-3">
                <h2><span className="text-dark">Mission: </span>{mission_name}</h2>
                <p>flight number:{flight_number}</p>
                <p>launch year{launch_year}</p>
                <p> launch success <span className={classNames({
                  'text-success': launch_success,
                  'text-danger': !launch_success
                })}>{launch_success ? 'yes' : 'no'}</span></p>

                <h4 className="my-3">Rocket Details</h4>
                <ul className="list-group">
                  <li className="list-group-item"><h6>Rocket ID: {rocket_id}</h6> </li>
                  <li className="list-group-item"><h6>Rocket ID: {rocket_name}</h6> </li>
                  <li className="list-group-item"><h6>Rocket ID: {rocket_type}</h6> </li>
                </ul>
              </div>
            )
          }}
        </Query>
      </Fragment>
    )
  }
}

export default Launch