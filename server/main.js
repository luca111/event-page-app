import { Meteor } from 'meteor/meteor';

import { check } from 'meteor/check';

import { Events } from '../imports/api/events.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('events', function eventsPublication() {
  // let eventsToPublish = Events.find();
  // console.log(eventsToPublish);
  // eventsToPublish = eventsToPublish.filter((entry) => {
  //   if (entry.owner === Meteor.userId()) {
  //     return entry;
  //   } else {
  //     delete entry[attendeesDetails];
  //     return entry;
  //   }
  // });
  // return eventsToPublish;
  return Events.find({},{fields: {attendeesDetails: 0}}); // Using Meteor API - standard MongoDB would be db.events.find({},{attendeesDetails: 0});
});

Meteor.publish('eventsAttendees', function eventsAttendeesPublication() {
  return Events.find({owner: this.userId});
});

Meteor.methods({
  'eventPublication'(previewData) {
    check(previewData, {
      eventName: String,
      organizer: String,
      eventStart: String,
      location: String,
      maxAttendees: Number,
      eventDescription: String,
      eventImage: String
    });
    if (!Meteor.userId()) {
      throw new Meteor.Error('not authorized');
    };
    let tentativeEventId = previewData.eventName.trim().replace(/\s+/g, "-");
    let tentativeEventIdIncrease = 0;
    while (Events.findOne({eventId: tentativeEventId})) {
      tentativeEventId = tentativeEventId + tentativeEventIdIncrease;
      tentativeEventIdIncrease++;
    }
    Events.insert({
      eventId: tentativeEventId,
      eventName: previewData.eventName,
      organizer: previewData.organizer,
      eventStart: previewData.eventStart,
      location: previewData.location,
      maxAttendees: previewData.maxAttendees,
      eventDescription: previewData.eventDescription,
      eventImage: previewData.eventImage,
      owner: Meteor.userId(),
      attendees: 0
    });
  },
  'rsvp'(rsvpInfo) {
    check(rsvpInfo, {
      rsvpEventId: String,
      firstName: String,
      lastName: String,
      email: String // should check for valid email instead
    });
    let eventsAttendanceForCheck = Events.findOne({eventId: rsvpInfo.rsvpEventId}, {maxAttendees: 1, attendees: 1});
    if (eventsAttendanceForCheck.attendees < eventsAttendanceForCheck.maxAttendees) {
      let rsvpInfoToStore = {
        firstName: rsvpInfo.firstName,
        lastName: rsvpInfo.lastName,
        email: rsvpInfo.email
      };
      Events.update({_id: eventsAttendanceForCheck._id}, {$inc: {attendees: 1}, $push: {attendeesDetails: rsvpInfoToStore}}, {multi: false});
    } else {
      throw new Meteor.Error('event full');
    }
  }
});
