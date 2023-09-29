import { EventWidget } from "./event";
const eventsUrl = "https://test-api.codingbootcamp.cz/api/6f9171d6/events";

export const loadEventsData = async () => {
  const response = await fetch(eventsUrl);
  const data = await response.json();
  const events = [];
  data.forEach((event) => {
    const newEvent = new EventWidget(
      event.name,
      event.id,
      event.date,
      event.description,
      event.image_url,
    );
    events.push(newEvent);
  });
};

const postRegisterForm = async (id, data) => {
  const eventId = 1;
  const url = `https://test-api.codingbootcamp.cz/api/6f9171d6/events/${eventId}/registrations`;
  const myDataObject = {
    name: "Rex",
    email: "jakub@email.com",
    rank: "Commissar",
    breed: "german shepherd",
  };
  const myResponse = await fetch(url, {
    method: "POST",
    body: JSON.stringify(myDataObject),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const myUsableResponse = await myResponse.json();
  console.log(myUsableResponse);
};

//postRegisterForm();
