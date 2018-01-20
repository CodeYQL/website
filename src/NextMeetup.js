import React, { Component } from 'react';
import './NextMeetup.css';
import { getMeetupEvents } from './MeetupApi';
import moment from 'moment';

const MEETUP_STATUS_UPCOMING = 'upcoming';

function isNextMeetupAvailable(meetups) {
  return !!meetups
    .filter(m => m.status === MEETUP_STATUS_UPCOMING)
    .length;
}

function nextMeetupData(meetups) {
  const [meetup] = meetups;

  if (meetup) {
    const m = moment(meetup.time);

    return {
      name: meetup.name,
      date: m.format('ddd, MMM DD, YYYY'),
      time: m.format('h:MM a'),
      venue_name: meetup.venue.name,
      venue_address: meetup.venue.address_1,
      attendee_count: meetup.yes_rsvp_count
    }
  }

  return {
    name: '',
    date: '',
    time: '',
    venue_name: '',
    venue_address: '',
    attendee_count: 0
  };
}

export class NextMeetup extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      is_next_meetup_available: false,
      name: '',
      description: '',
      venue_name: '',
      venue_address: ''
    };
  }

  componentDidMount() {
    getMeetupEvents()
      .then((meetups) => {
        this.setState({
          is_next_meetup_available: isNextMeetupAvailable(meetups),
          ...nextMeetupData(meetups)
        });
      });
  }

  render() {
    return (
      <div className="next-meetup">
        <div className="container-fluid">
            <div className="description">
                <span>Next Meetup</span>
                <h3>{this.state.name}</h3>

                <section>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p><strong>{this.state.venue_name}</strong> {this.state.venue_address}</p>
                    <p style={{textAlign: 'right'}}><strong>{this.state.date} {this.state.time}</strong>{this.state.attendee_count} nerds going</p>
                  </div>

                  <div className="next-meetup-actions">
                      <a href="#">More Info</a> <a href="#">I'm going!</a>
                  </div>
                </section>
              </div>
          </div>
      </div>
    );
  }
}