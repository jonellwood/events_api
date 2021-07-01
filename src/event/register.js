import { event } from './event';

export async function registerEvent(eventName, eventLocation) {
  event.insertOne({
    eventName,
    eventLocation,
  })
}
