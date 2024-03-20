// Function to add a new row to the table
function addGlassRow(type, thickness,size, quantity) {
    const tbody = document.querySelector("#glass-table tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${type}</td>
      <td>${thickness}</td>
      <td>${size}</td>
      <td>${quantity}</td>
      <td class="checkbox-container"></td>
    `;
    const checkboxContainer = newRow.querySelector(".checkbox-container");
    for (let i = 1; i <= quantity; i++) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "option";
      checkbox.value = `Glass ${i}`;
      const label = document.createElement("label");
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(`Glass ${i}`));
      checkboxContainer.appendChild(label);
      checkboxContainer.appendChild(document.createElement("br"));
    }
    tbody.appendChild(newRow);
  }
  
  // Example usage: add a new row with checkboxes
  addGlassRow("Tinted", "5mm","5*5", 3);
  addGlassRow("Frosted", "10mm","5*5", 4);
 
  // Event listener for submit button
document.getElementById("submit-button").addEventListener("click", function() {
    // Retrieve all checkboxes and create an array of selected options
    const checkboxes = document.querySelectorAll(".option:checked");
    const selectedOptions = Array.from(checkboxes).map(checkbox => checkbox.value);
  
    // Check if any options are selected
    if (selectedOptions.length > 0) {
      // Display selected options in an alert message
      alert("Selected Options:\n" + selectedOptions.join("\n"));
    } else {
      // If no options are selected, display a message
      alert("Please select at least one option.");
    }
  });
  
  
  // You can call this function multiple times with different data to add more rows dynamically.
  