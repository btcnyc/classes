// Data layer with localStorage persistence

const DEFAULT_DATA = {
    users: [
        { id: 1, username: 'teacher', password: 'teacher123', role: 'teacher' },
        { id: 2, username: 'admin', password: 'admin123', role: 'admin' }
    ],
    categories: [
        { id: 1, name: 'Bitcoin Basics' },
        { id: 2, name: 'Lightning Network' },
        { id: 3, name: 'Privacy & Security' },
        { id: 4, name: 'Self-Custody' },
        { id: 5, name: 'Nostr' }
    ],
    materials: [
        {
            id: 1,
            title: 'Introduction to Bitcoin',
            content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>',
            categoryId: 1,
            imageUrl: '',
            createdAt: '2024-01-15T10:00:00Z',
            updatedAt: '2024-01-15T10:00:00Z'
        },
        {
            id: 2,
            title: 'Setting Up a Lightning Node',
            content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p><ul><li>Step 1: Install the software</li><li>Step 2: Configure your node</li><li>Step 3: Open channels</li></ul>',
            categoryId: 2,
            imageUrl: '',
            createdAt: '2024-02-20T14:30:00Z',
            updatedAt: '2024-02-20T14:30:00Z'
        },
        {
            id: 3,
            title: 'Using Tor for Privacy',
            content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p><p>Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>',
            categoryId: 3,
            imageUrl: '',
            createdAt: '2024-03-10T09:15:00Z',
            updatedAt: '2024-03-10T09:15:00Z'
        }
    ],
    sectionDescriptions: {
        materials: 'Explore our collection of educational resources on Freedom Tech.',
        teachers: '',
        contribute: ''
    }
};

// Initialize data from localStorage or use defaults
function initData() {
    if (!localStorage.getItem('freedomlab_data')) {
        localStorage.setItem('freedomlab_data', JSON.stringify(DEFAULT_DATA));
    }
    return JSON.parse(localStorage.getItem('freedomlab_data'));
}

// Save data to localStorage
function saveData(data) {
    localStorage.setItem('freedomlab_data', JSON.stringify(data));
}

// Get all data
function getData() {
    return JSON.parse(localStorage.getItem('freedomlab_data')) || DEFAULT_DATA;
}

// User authentication
function authenticate(username, password) {
    const data = getData();
    return data.users.find(u => u.username === username && u.password === password);
}

// Get current user from session
function getCurrentUser() {
    const userJson = sessionStorage.getItem('freedomlab_user');
    return userJson ? JSON.parse(userJson) : null;
}

// Set current user
function setCurrentUser(user) {
    if (user) {
        sessionStorage.setItem('freedomlab_user', JSON.stringify(user));
    } else {
        sessionStorage.removeItem('freedomlab_user');
    }
}

// Category operations
function getCategories() {
    return getData().categories;
}

function addCategory(name) {
    const data = getData();
    const newId = Math.max(...data.categories.map(c => c.id), 0) + 1;
    data.categories.push({ id: newId, name });
    saveData(data);
    return newId;
}

function deleteCategory(id) {
    const data = getData();
    data.categories = data.categories.filter(c => c.id !== id);
    // Also remove materials in this category
    data.materials = data.materials.filter(m => m.categoryId !== id);
    saveData(data);
}

// Material operations
function getMaterials() {
    return getData().materials;
}

function getMaterialById(id) {
    return getData().materials.find(m => m.id === id);
}

function addMaterial(material) {
    const data = getData();
    const newId = Math.max(...data.materials.map(m => m.id), 0) + 1;
    const now = new Date().toISOString();
    const newMaterial = {
        id: newId,
        ...material,
        createdAt: now,
        updatedAt: now
    };
    data.materials.push(newMaterial);
    saveData(data);
    return newId;
}

function updateMaterial(id, updates) {
    const data = getData();
    const index = data.materials.findIndex(m => m.id === id);
    if (index !== -1) {
        data.materials[index] = {
            ...data.materials[index],
            ...updates,
            updatedAt: new Date().toISOString()
        };
        saveData(data);
        return true;
    }
    return false;
}

function deleteMaterial(id) {
    const data = getData();
    data.materials = data.materials.filter(m => m.id !== id);
    saveData(data);
}

// Section descriptions
function getSectionDescription(section) {
    const data = getData();
    return data.sectionDescriptions[section] || '';
}

// Initialize on load
initData();

