// Temporary in-memory database

let assets = []

// DOM references

const btnAdd = document.getElementById('btn-add');
const filterCat = document.getElementById('filter-category')
const output = document.getElementById('output')

// Function to add data
btnAdd.addEventListener('click', () =>
    {
        const name = document.getElementById('name').value;
        const category = document.getElementById('category').value;
        const value = Number(document.getElementById('value').value);

// Validation logic (Data integrity)

            if (name.trim() === "" || value <= 0) {
                alert("Error: Please enter valid data for the asset");
                return; 
            }

            
            const newAsset = {
    id: Date.now(), // generate a simple unique asset
    name,
    category,
    value
    };

            assets.push(newAsset);
            console.log("Asset registered:", newAsset);
            render(assets);

});

// Filter logic (Simulating SQL Query)
filterCat.addEventListener('change', (e) => 
{
    const selection = e.target.value;
    if (selection === "") {
        render(assets);
    } else {
        const filtered = assets.filter(a => a.category === selection);
        render(filtered);
    }
});

// Function that calculates the Total sum of all assets 
function calculateTotal(list) 
{
    const totalValue = list.reduce((acum, item) => acum + item.value, 0);
    return totalValue;
}

// Function to display in the DOM 
function render(list) {
    output.innerHTML = "";

    list.forEach(item => {
        const card = document.createElement('div');
        card.className = "card";

        card.innerHTML = `
        <span class="id"><strong>ID:</strong> ${item.id}</span> |
        <span class="name"><strong>Name:</strong> ${item.name}</span> |
        <span class="category ${item.category.toLowerCase()}">
        <strong>Category:</strong> ${item.category}
        </span> |
        <span class="value">
        <span class="label-value">Value:</span>
        <span class="number-value">$${item.value}</span>
        </span>
        `;

        output.appendChild(card);
    });

    // Add Total at the end
    const total = calculateTotal(list);
    const totalCard = document.createElement('div');
    totalCard.className = "total-card";
    totalCard.innerHTML = `
    <strong>Total Value:</strong> <span class="total-amount">$${total}</span>`;
    
    output.appendChild(totalCard);
}
//-----------------------------------------------------------------------------------------------

// 1. INITIAL LOAD: Read what already exists when the website opens

assets = JSON.parse(localStorage.getItem('db_assets')) || [];

function saveOnDisk() {
// 2. PERSISTENCE: Convert the array to text and send it to disk

localStorage.setItem('db_assets', JSON.stringify(assets));

}

function deleteAsset(id) {
// 3. DELETION LOGIC: Filter to exclude the ID we want to delete

assets = assets.filter(item => item.id !== id);

// 4. SYNCHRONIZATION: IF YOU DELETE FROM MEMORY, DELETE FROM DISK

saveOnDisk();

render(assets);

}