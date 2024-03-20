// // Function to add a new row to the table
// function addGlassRow(type,colour, thickness,size,drawing, quantity) {
//     const tbody = document.querySelector("#glass-table tbody");
//     const newRow = document.createElement("tr");
    
//     newRow.innerHTML = `
//       <td>${type}</td>
//       <td>${colour}</td>
//       <td>${thickness}</td>
//       <td>${size}</td>
//       <td>${drawing}</td>
//       <td>${quantity}</td>
//     `;

    
//     tbody.appendChild(newRow);
//   }

//   // Example usage: add a new row with checkboxes
//   addGlassRow("Tinted","blue", "5mm","5*5", "yes",2);
//   addGlassRow("Frosted","red", "10mm","5*5", "no",3);



// Function to add a new row to the table
function addGlassRow(type, colour, thickness, size, drawing, quantity) {
    const tbody = document.querySelector("#glass-table tbody");
    const newRow = document.createElement("tr");

    if (type !== undefined && colour !== undefined && thickness !== undefined && size !== undefined && drawing !== undefined && quantity !== undefined) {
        // If predefined values are provided, create a row with those values
        newRow.innerHTML = `
          <td>${type}</td>
          <td>${colour}</td>
          <td>${thickness}</td>
          <td>${size}</td>
          <td>${drawing}</td>
          <td>${quantity}</td>
        `;
    } else {
        // If no predefined values are provided, create a row with input fields
        newRow.innerHTML = `
          <td><input type="text" class="glass-type" required></td>
          <td><input type="text" class="glass-colour" required></td>
          <td><input type="number" class="glass-thickness" min="1" required></td>
          <td><input type="text" class="glass-size" required></td>
          <td>
            <select class="glass-colour" required>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </td>
          <td><input type="number" class="glass-quantity" min="1" required></td>
        `;
    }

    tbody.appendChild(newRow);
}

// Example usage: add a new row with checkboxes
addGlassRow("Tinted", "blue", "5mm", "5*5", "yes", 2);
addGlassRow("Frosted", "red", "10mm", "5*5", "no", 3);

// Event listener for adding rows dynamically
document.getElementById('add-row-button').addEventListener('click', function() {
    addGlassRow();
});

// Event listener for adding empty rows after the given rows
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('add-row-after')) {
        const currentRow = event.target.parentNode.parentNode;
        addGlassRow(undefined, undefined, undefined, undefined, undefined, undefined);
        currentRow.parentNode.insertBefore(newRow, currentRow.nextSibling);
    }
});
