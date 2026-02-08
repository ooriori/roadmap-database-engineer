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
}