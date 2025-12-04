// App state
let currentSection = 'materials';
let currentSort = 'updated';
let currentCategory = null;
let searchTerm = '';

// DOM Elements
const authSection = document.querySelector('.auth-section');
const userBadge = document.getElementById('userBadge');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const closeLoginModal = document.getElementById('closeLoginModal');

const materialModal = document.getElementById('materialModal');
const materialForm = document.getElementById('materialForm');
const closeMaterialModal = document.getElementById('closeMaterialModal');
const cancelMaterial = document.getElementById('cancelMaterial');
const materialModalTitle = document.getElementById('materialModalTitle');

const categoriesModal = document.getElementById('categoriesModal');
const closeCategoriesModal = document.getElementById('closeCategoriesModal');
const newCategoryInput = document.getElementById('newCategoryInput');
const addCategoryBtn = document.getElementById('addCategoryBtn');
const categoryManageList = document.getElementById('categoryManageList');

const sectionLinks = document.querySelectorAll('.section-link');
const sectionTitle = document.getElementById('sectionTitle');
const sectionDescription = document.getElementById('sectionDescription');
const materialsGrid = document.getElementById('materialsGrid');
const emptyState = document.getElementById('emptyState');
const addMaterialBtn = document.getElementById('addMaterialBtn');
const addFirstBtn = document.getElementById('addFirstBtn');
const manageCategoriesBtn = document.getElementById('manageCategoriesBtn');

const searchInput = document.getElementById('searchInput');
const sortDropdown = document.getElementById('sortDropdown');
const sortLabel = document.getElementById('sortLabel');
const categoryList = document.getElementById('categoryList');

// Initialize app
function init() {
    updateAuthUI();
    renderCategories();
    renderMaterials();
    setupEventListeners();
}

// Update UI based on auth state
function updateAuthUI() {
    const user = getCurrentUser();
    if (user) {
        authSection.style.display = 'flex';
        userBadge.textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
        addMaterialBtn.style.display = 'block';
        manageCategoriesBtn.style.display = 'block';
    } else {
        authSection.style.display = 'none';
        addMaterialBtn.style.display = 'none';
        manageCategoriesBtn.style.display = 'none';
    }
}

// Setup event listeners
function setupEventListeners() {
    // Auth events - removed login button click since it's hidden
    closeLoginModal.addEventListener('click', () => loginModal.classList.remove('open'));
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.classList.remove('open');
    });
    loginForm.addEventListener('submit', handleLogin);
    logoutBtn.addEventListener('click', handleLogout);

    // Material modal events
    closeMaterialModal.addEventListener('click', () => materialModal.classList.remove('open'));
    cancelMaterial.addEventListener('click', () => materialModal.classList.remove('open'));
    materialModal.addEventListener('click', (e) => {
        if (e.target === materialModal) materialModal.classList.remove('open');
    });
    materialForm.addEventListener('submit', handleMaterialSubmit);
    addMaterialBtn.addEventListener('click', () => openMaterialModal());
    addFirstBtn.addEventListener('click', () => openMaterialModal());

    // Categories modal events
    closeCategoriesModal.addEventListener('click', () => categoriesModal.classList.remove('open'));
    categoriesModal.addEventListener('click', (e) => {
        if (e.target === categoriesModal) categoriesModal.classList.remove('open');
    });
    manageCategoriesBtn.addEventListener('click', openCategoriesModal);
    addCategoryBtn.addEventListener('click', handleAddCategory);

    // Editor toolbar
    document.querySelectorAll('.editor-toolbar button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.execCommand(btn.dataset.cmd, false, null);
        });
    });

    // Section navigation
    sectionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            changeSection(link.dataset.section);
        });
    });

    // Search
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderMaterials();
    });

    // Sort dropdown
    sortDropdown.querySelector('.dropdown-btn').addEventListener('click', () => {
        sortDropdown.classList.toggle('open');
    });
    sortDropdown.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            currentSort = item.dataset.sort;
            sortLabel.textContent = item.textContent;
            sortDropdown.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            sortDropdown.classList.remove('open');
            renderMaterials();
        });
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!sortDropdown.contains(e.target)) {
            sortDropdown.classList.remove('open');
        }
    });
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = authenticate(username, password);
    if (user) {
        setCurrentUser(user);
        loginModal.classList.remove('open');
        updateAuthUI();
        renderMaterials();
        loginForm.reset();
    } else {
        alert('Invalid username or password');
    }
}

// Handle logout
function handleLogout() {
    setCurrentUser(null);
    updateAuthUI();
    renderMaterials();
}

// Change section
function changeSection(section) {
    currentSection = section;
    sectionLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === section);
    });
    
    const titles = {
        materials: 'Educational Materials',
        teachers: "Teachers' Guide",
        contribute: 'How to Contribute'
    };
    
    sectionTitle.textContent = titles[section];
    sectionDescription.textContent = getSectionDescription(section);
    renderMaterials();
}

// Render categories
function renderCategories() {
    const categories = getCategories();
    
    // Sidebar category pills - with "All" option for no filter
    categoryList.innerHTML = `
        <button class="category-pill ${currentCategory === null ? 'active' : ''}" data-category="none">
            All
        </button>
    ` + categories.map(cat => `
        <button class="category-pill ${currentCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
            ${cat.name}
        </button>
    `).join('');
    
    // Add click handlers
    categoryList.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const catValue = pill.dataset.category;
            if (catValue === 'none') {
                currentCategory = null;
            } else {
                const catId = parseInt(catValue);
                // Toggle selection - clicking same category deselects it
                currentCategory = currentCategory === catId ? null : catId;
            }
            renderCategories();
            renderMaterials();
        });
    });
    
    // Material form category select
    const categorySelect = document.getElementById('materialCategory');
    categorySelect.innerHTML = categories.map(cat => `
        <option value="${cat.id}">${cat.name}</option>
    `).join('');
}

// Render materials
function renderMaterials() {
    const user = getCurrentUser();
    
    // For Teacher's Guide and How to Contribute, show empty state with custom message
    if (currentSection === 'teachers' || currentSection === 'contribute') {
        materialsGrid.innerHTML = '';
        emptyState.style.display = 'block';
        emptyState.querySelector('p').textContent = 'Coming soon.';
        addFirstBtn.style.display = 'none';
        return;
    }
    
    let materials = getMaterials();
    const categories = getCategories();
    
    // Filter by category
    if (currentCategory !== null) {
        materials = materials.filter(m => m.categoryId === currentCategory);
    }
    
    // Filter by search
    if (searchTerm) {
        materials = materials.filter(m => 
            m.title.toLowerCase().includes(searchTerm) ||
            m.content.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sort
    switch (currentSort) {
        case 'updated':
            materials.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
            break;
        case 'az':
            materials.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'za':
            materials.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }
    
    if (materials.length === 0) {
        materialsGrid.innerHTML = '';
        emptyState.style.display = 'block';
        emptyState.querySelector('p').textContent = 'No materials found.';
        addFirstBtn.style.display = user ? 'inline-block' : 'none';
    } else {
        emptyState.style.display = 'none';
        materialsGrid.innerHTML = materials.map(material => {
            const category = categories.find(c => c.id === material.categoryId);
            const categoryName = category ? category.name : 'Uncategorized';
            const plainContent = material.content.replace(/<[^>]+>/g, '');
            
            return `
                <div class="material-card" data-id="${material.id}">
                    <div class="material-card-header">
                        <div class="window-controls">
                            <span class="window-btn window-btn-minimize">−</span>
                            <span class="window-btn window-btn-maximize">□</span>
                            <span class="window-btn window-btn-close">×</span>
                        </div>
                        <span class="material-card-category">${categoryName}</span>
                    </div>
                    <div class="material-card-body">
                        <div class="material-info">
                            <h3>${material.title}</h3>
                            <p>${plainContent.substring(0, 200)}${plainContent.length > 200 ? '...' : ''}</p>
                            <div class="material-actions">
                                <a href="#" class="read-more">Read more <span class="arrow">→</span></a>
                                ${user ? `
                                    <button class="edit-btn" data-id="${material.id}">edit</button>
                                    <button class="delete-btn" data-id="${material.id}">delete</button>
                                ` : ''}
                            </div>
                        </div>
                        <div class="material-image">
                            ${material.imageUrl 
                                ? `<img src="${material.imageUrl}" alt="${material.title}">`
                                : `<span class="material-image-placeholder">[IMG]</span>`
                            }
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Add edit/delete handlers
        if (user) {
            materialsGrid.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', () => openMaterialModal(parseInt(btn.dataset.id)));
            });
            materialsGrid.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    if (confirm('Are you sure you want to delete this material?')) {
                        deleteMaterial(parseInt(btn.dataset.id));
                        renderMaterials();
                    }
                });
            });
        }
    }
}

// Open material modal
function openMaterialModal(materialId = null) {
    const user = getCurrentUser();
    if (!user) return;
    
    materialForm.reset();
    document.getElementById('materialContent').innerHTML = '';
    document.getElementById('materialId').value = '';
    
    if (materialId) {
        const material = getMaterialById(materialId);
        if (material) {
            materialModalTitle.textContent = 'Edit Material';
            document.getElementById('materialId').value = material.id;
            document.getElementById('materialTitle').value = material.title;
            document.getElementById('materialCategory').value = material.categoryId;
            document.getElementById('materialImage').value = material.imageUrl || '';
            document.getElementById('materialContent').innerHTML = material.content;
        }
    } else {
        materialModalTitle.textContent = 'Add Material';
    }
    
    materialModal.classList.add('open');
}

// Handle material form submit
function handleMaterialSubmit(e) {
    e.preventDefault();
    
    const id = document.getElementById('materialId').value;
    const materialData = {
        title: document.getElementById('materialTitle').value,
        categoryId: parseInt(document.getElementById('materialCategory').value),
        imageUrl: document.getElementById('materialImage').value,
        content: document.getElementById('materialContent').innerHTML
    };
    
    if (id) {
        updateMaterial(parseInt(id), materialData);
    } else {
        addMaterial(materialData);
    }
    
    materialModal.classList.remove('open');
    renderMaterials();
}

// Open categories modal
function openCategoriesModal() {
    renderCategoryManageList();
    categoriesModal.classList.add('open');
}

// Render category management list
function renderCategoryManageList() {
    const categories = getCategories();
    categoryManageList.innerHTML = categories.map(cat => `
        <div class="category-manage-item">
            <span>${cat.name}</span>
            <button data-id="${cat.id}">✕ Delete</button>
        </div>
    `).join('');
    
    categoryManageList.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm(`Delete category "${categories.find(c => c.id === parseInt(btn.dataset.id)).name}"? This will also delete all materials in this category.`)) {
                deleteCategory(parseInt(btn.dataset.id));
                renderCategoryManageList();
                renderCategories();
                renderMaterials();
            }
        });
    });
}

// Handle add category
function handleAddCategory() {
    const name = newCategoryInput.value.trim();
    if (name) {
        addCategory(name);
        newCategoryInput.value = '';
        renderCategoryManageList();
        renderCategories();
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);

