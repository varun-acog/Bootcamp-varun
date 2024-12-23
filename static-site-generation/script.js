let products = [];
const productsPerPage = 12;
let currentPage = 1;

const productGrid = document.getElementById('productGrid');
const searchBar = document.getElementById('searchBar');
const autocomplete = document.getElementById('autocomplete');
const filterBrand = document.getElementById('filterBrand');
const minPrice = document.getElementById('minPrice');
const maxPrice = document.getElementById('maxPrice');
const sortPrice = document.getElementById('sortPrice');
const categoryFilter = document.getElementById('categoryFilter');
const filterRating = document.getElementById('filterRating');
const ratingValue = document.getElementById('ratingValue');

const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');
const currentPageDisplay = document.getElementById('currentPage');

async function fetchProducts() {
    const response = await fetch('./data.json');
    products = await response.json();
    // Populate filter options only after fetching products
    populateFilterOptions();
    renderProducts();  // Render all products initially
}

function populateFilterOptions() {
    // Populate the brand filter
    const brands = Array.from(new Set(products.map(product => product.brand)));
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        filterBrand.appendChild(option);
    });

    // Populate category filter dynamically
    populateCategoryFilter();
}

function populateCategoryFilter() {
    const categories = Array.from(new Set(products.map(product => product.category)));
    categories.forEach(category => {
        const checkBoxList = document.createElement('div')
        checkBoxList.id = 'checkbox-list'
        checkBoxList.style= 'margin:4px'
        categoryFilter.appendChild(checkBoxList)

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = category;
        checkbox.id = `category-${category}`;
        checkbox.style = 'cursor:pointer;'

        const label = document.createElement('label');
        label.htmlFor = `category-${category}`;
        label.textContent = category;
        label.style='margin-left:5px;cursor:pointer;'

        checkBoxList.appendChild(checkbox);
        checkBoxList.appendChild(label);

        checkbox.addEventListener('change', () => {
            currentPage = 1;
            renderProducts();
        });
    });
}

function renderProducts() {
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;

    let filteredProducts = products;

    // Apply filters based on user input
    if (searchBar.value) {
        filteredProducts = filteredProducts.filter(product => fuzzySearch(searchBar.value, product.name));
    }
    if (filterBrand.value) {
        filteredProducts = filteredProducts.filter(product => product.brand === filterBrand.value);
    }
    if (minPrice.value) {
        filteredProducts = filteredProducts.filter(product => product.price >= minPrice.value);
    }
    if (maxPrice.value) {
        filteredProducts = filteredProducts.filter(product => product.price <= maxPrice.value);
    }
    if (filterRating.value) {
        filteredProducts = filteredProducts.filter(product => product.rating >= filterRating.value);
    }
    if (categoryFilter) {
        filteredProducts = filteredProducts.filter(product => isCategorySelected(product.category));
    }

    // Sort filtered products based on price
    if (sortPrice.value === 'asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortPrice.value === 'desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    const paginatedProducts = filteredProducts.slice(start, end);

    productGrid.innerHTML = '';  // Clear previous products

    if (paginatedProducts.length === 0) {
        productGrid.innerHTML = '<div class="no-products">No products available</div>';
    } else {
        paginatedProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'card';
            productCard.innerHTML = ` 
                <img src="${product.image}" alt="${product.name}" style="width: 100%;height: 300px;border-radius: 6px;" onerror="this.onerror=null; this.src='https://res.cloudinary.com/dynsxgrtl/image/upload/v1734894820/bs7hvucuhxan2ewgossq.png';" />
                <h1 style="color: #171f46;font-family: 'Roboto';font-size: 24px;font-weight: 500;margin-top: 20px;margin-bottom: 8px;">${product.name}</h1>
                <p style="color: #594d6d;font-family: 'Roboto';font-size: 18px;margin-bottom: 6px;">by ${product.brand}</p>
                <div style="display: flex;justify-content: space-between;align-items: flex-end;margin-top: 2px;">
                    <p style="color: #171f46;font-family: 'Roboto';font-size: 18px;font-weight: 700;margin: 0px;">$${product.price}/-</p>
                    <div style="display: flex;align-items: center;background-color: #3b82f6;border-radius: 6px;padding: 6px 16px;">
                        <p style="color: #ffffff;font-family: 'Roboto';font-size: 16px;font-weight: 500;margin-right: 4px;margin-top: 0px;margin-bottom: 0px;">${product.rating}</p>
                        <img
                        src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                        alt="star"
                        style="height: 20px;width: 20px; margin-bottom: 3px;"
                        />
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }
    updatePaginationButtons(filteredProducts.length);
}

function updatePaginationButtons(filteredLength) {
    prevPage.disabled = currentPage === 1;
    nextPage.disabled = currentPage * productsPerPage >= filteredLength;
    currentPageDisplay.textContent = `Page ${currentPage}`;
}

function isCategorySelected(category) {
    const checkboxes = document.querySelectorAll('#categoryFilter input[type="checkbox"]:checked');
    if (checkboxes.length === 0) return true;
    return Array.from(checkboxes).some(checkbox => checkbox.value === category);
}

function fuzzySearch(query, text) {
    const queryLower = query.toLowerCase();
    const textLower = text.toLowerCase();
    return textLower.includes(queryLower);
}

searchBar.addEventListener('input', () => {
    currentPage = 1;
    renderAutocomplete();
    renderProducts();
});

function renderAutocomplete() {
    const query = searchBar.value.toLowerCase();
    if (query === '') {
        autocomplete.style.display = 'none';
        return;
    }

    const suggestions = products
        .filter(product => product.name.toLowerCase().includes(query))
        .slice(0, 5);

    autocomplete.innerHTML = '';
    if (suggestions.length > 0) {
        autocomplete.style.display = 'block';
        suggestions.forEach(product => {
            const suggestion = document.createElement('div');
            suggestion.textContent = product.name;
            suggestion.addEventListener('click', () => {
                searchBar.value = product.name;
                autocomplete.innerHTML = '';
                autocomplete.style.display = 'none';
                renderProducts();
            });
            autocomplete.appendChild(suggestion);
        });
    } else {
        autocomplete.style.display = 'none';
    }
}

minPrice.addEventListener('input', () => {
    currentPage = 1;
    renderProducts();
});

maxPrice.addEventListener('input', () => {
    currentPage = 1;
    renderProducts();
});

filterBrand.addEventListener('change', () => {
    currentPage = 1;
    renderProducts();
});

filterRating.addEventListener('input', () => {
    ratingValue.textContent = `Min Rating: ${filterRating.value}`;
    currentPage = 1;
    renderProducts();
});

sortPrice.addEventListener('change', () => {
    currentPage = 1;
    renderProducts();
});

prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderProducts();
    }
});

nextPage.addEventListener('click', () => {
    currentPage++;
    renderProducts();
});

document.getElementById('clearFilters').addEventListener('click', () => {
    searchBar.value = '';
    filterBrand.value = '';
    minPrice.value = '';
    maxPrice.value = '';
    filterRating.value = 1;
    ratingValue.textContent = 'Min Rating: 1';
    sortPrice.value = '';
    document.querySelectorAll('#categoryFilter input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    currentPage = 1;
    renderProducts();
});


document.getElementById('shopNow').addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// Fetch and initialize
fetchProducts();