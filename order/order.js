// Function to generate checkboxes based on quantity
// function generateCheckboxes(quantity) {
//     let checkboxesHTML = '';
//     for (let i = 1; i <= quantity; i++) {
//       checkboxesHTML += `<label><input type="checkbox" class="option" value="Option ${i}"> Option ${i}</label><br>`;
//     }
//     return checkboxesHTML;
//   }
  
  // Function to add a new row to the table
  function addGlassRow() {
    const tbody = document.getElementById('glass-table-body');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td><input type="text" class="glass-type" required></td>
      <td><input type="text" class="glass-colour" required></td>
      <td><input type="number" class="glass-thickness"  min="1" required></td>
      <td><input type="text" class="glass-size" required></td>
      <td>
      <select class="glass-colour" required>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </td>
      <td><input type="number" class="glass-quantity" min="1" required></td>
    `;
    tbody.appendChild(newRow);
  }
  
  // Event listener for adding rows dynamically
  document.getElementById('add-row-button').addEventListener('click', function() {
    addGlassRow();
  });
  
  // Event listener for checkbox generation based on quantity
  document.addEventListener('input', function(event) {
    if (event.target && event.target.classList.contains('glass-quantity')) {
      const quantity = event.target.value;
      const row = event.target.parentNode.parentNode;
      const checkboxContainer = row.querySelector('.checkbox-container');
      checkboxContainer.innerHTML = generateCheckboxes(quantity);
    }
  });
  