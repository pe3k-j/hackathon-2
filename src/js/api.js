const eventsUrl = "https://test-api.codingbootcamp.cz/api/6f9171d6/events";

const loadEventsData = async () => {
  const response = await fetch(eventsUrl);
  const data = await response.json();
  const events = [];
  data.forEach((event) => {
    //const newEvent = new eventWidget(event.name, event.id, event.date, event.description, event.image_url)
    //events.push(newEvent)
    console.log("name: " + event.name);
    console.log("id: " + event.id);
    console.log("date: " + event.date);
    console.log("description: " + event.description);
    console.log("image_url: " + event.image_url);
    console.log(
      "=================================================================",
    );
  });
};
//loadEventsData();

const postRegisterForm = async () => {
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
