const eventsUrl = "https://test-api.codingbootcamp.cz/api/6f9171d6/events";

const loadEventsData = async () => {
  const response = await fetch(eventsUrl);
  const data = await response.json();
  data.forEach((event) => {
    console.log("name: " + event.name)
    console.log("date: " + event.date)
    console.log("description: " + event.description)
    console.log("image_url: " + event.image_url)
    console.log("=================================================================")
  });
};
//loadEventsData()
