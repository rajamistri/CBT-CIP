document
  .getElementById("create-event-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;
    const eventTime = document.getElementById("eventTime").value;
    const eventLocation = document.getElementById("eventLocation").value;

    // Create new event element
    const eventItem = document.createElement("li");
    eventItem.textContent = `${eventName} - ${eventDate} at ${eventTime}, ${eventLocation}`;

    // Add event to the event list
    document.getElementById("events").appendChild(eventItem);

    // Clear form fields
    document.getElementById("create-event-form").reset();
  });
