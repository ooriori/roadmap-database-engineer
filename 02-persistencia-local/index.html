// 1. INITIAL LOAD: Read database from disk or start empty
// Usamos JSON.parse para convertir el texto del disco en objetos de JS
let assets = JSON.parse(localStorage.getItem('db_assets')) || [];

// DOM references
const btnAdd = document.getElementById('btn-add');
const filterCat = document.getElementById('filter-category');
const output = document.getElementById('output');

// Initial render to show saved data
render(assets);

// 2. SAVE FUNCTION: Keeps the disk updated
function saveOnDisk() {
    localStorage.setItem('db_assets', JSON.stringify(assets));
}

// 3. ADD DATA LOGIC
btnAdd.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const value = Number(document.getElementById('value').value);

    // Data integrity validation
    if (name.trim() === "" || value <= 0) {
        alert("Error: Please enter valid data for the asset");
        return; 
    }

    const newAsset = {
        id: Date.now(), // Unique ID based on timestamp
        name,
        category,
        value
    };

    assets.push(newAsset);
    saveOnDisk(); // <--- CRUCIAL: Persist data immediately
    render(assets);

    // Clean inputs for the user
    document.getElementById('name').value = "";
    document.getElementById('value').value = "";
});

// 4. FILTER LOGIC (Simulating SQL Query)
filterCat.addEventListener('change', (e) => {
    const selection = e.target.value;
    if (selection === "" || selection === "All") {
        render(assets);
    } else {
        const filtered = assets.filter(a => a.category === selection);
        render(filtered);
    }
});

// 5. CALCULATION LOGIC (Data Aggregation)
function calculateTotal(list) {
    // Reduce: The "Swiss Army Knife" of Data Engineers
    return list.reduce((acum, item) => acum + item.value, 0);
}

// 6. DELETION LOGIC
function deleteAsset(id) {
    // Filter out the item with the matching ID
    assets = assets.filter(item => item.id !== id);
    saveOnDisk(); // Update storage after deletion
    render(assets);
}

// 7. DISPLAY LOGIC (DOM Manipulation)
function render(list) {
    output.innerHTML = "";

    list.forEach(item => {
        const card = document.createElement('div');
        card.className = "card";

        card.innerHTML = `
            <span class="id"><strong>ID:</strong> ${item.id}</span> |
            <span class="name"><strong>Name:</strong> ${item.name}</span> |
            <span class="category ${item.category.toLowerCase()}">
                <strong>Cat:</strong> ${item.category}
            </span> |
            <span class="value">
                <strong>Value:</strong> $${item.value}
            </span>
            <button class="btn-delete" onclick="deleteAsset(${item.id})">Delete</button>
        `;
        output.appendChild(card);
    });

    // Add Total at the end
    const total = calculateTotal(list);
    const totalCard = document.createElement('div');
    totalCard.className = "total-card";
    totalCard.innerHTML = `<strong>Total Portfolio Value:</strong> <span class="total-amount">$${total}</span>`;
    output.appendChild(totalCard);
}
