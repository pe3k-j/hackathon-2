import { EventWidget } from "./event";
import { ModalWindow } from "./form";

const eventsUrl = "https://test-api.codingbootcamp.cz/api/6f9171d6/events";

export const loadEventsData = async () => {
  const response = await fetch(eventsUrl);
  const data = await response.json();
  const events = [];
  const modalWindows = [];
  data.forEach((event) => {
    const newEvent = new EventWidget(
      event.name,
      event.id,
      event.date,
      event.description,
      event.image_url,
    );
    events.push(newEvent);
    const newModalWindow = new ModalWindow(newEvent);
    modalWindows.push(newModalWindow);
  });
};

export const postRegisterForm = async (id, data) => {
  const url = `https://test-api.codingbootcamp.cz/api/6f9171d6/events/${id}/registrations`;
  const myResponse = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const myUsableResponse = await myResponse.json();
  console.log(myUsableResponse); // temp delete after it is working
}
