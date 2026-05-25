// Admin Panel Password
const ADMIN_PASSWORD = '5';

// Check Password
function checkPassword(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;

    if (password === ADMIN_PASSWORD) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('admin-panel').classList.remove('hidden');
        localStorage.setItem('adminLoggedIn', 'true');
        loadAllData();
    } else {
        alert('Գաղտնաբառը սխալ է։ Փորձեք կրկին');
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
}

// Logout
function logout() {
    localStorage.removeItem('adminLoggedIn');
    location.reload();
}

// Check if already logged in
window.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('admin-panel').classList.remove('hidden');
        loadAllData();
    }
});

// Show Admin Section
function showAdminSection(sectionName) {
    event.preventDefault();
    
    // Hide all sections
    const sections = document.querySelectorAll('.admin-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show selected section
    const sectionId = sectionName + '-section';
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }

    // Add active class to clicked menu item
    if (event.target) {
        event.target.classList.add('active');
    }
}

// ==================== DATA MANAGEMENT ====================

// Users Data
function getUsersData() {
    const stored = localStorage.getItem('adminUsers');
    if (stored) return JSON.parse(stored);
    return [
        { id: 1, name: 'Արման Մովսիսյան', email: 'arman@example.com', role: 'Օգտատեր' },
        { id: 2, name: 'Լիլի Պետրոսյան', email: 'lily@example.com', role: 'Օգտատեր' },
        { id: 3, name: 'Հայկ Հայկյան', email: 'hayk@example.com', role: 'Մոդերատոր' },
        { id: 4, name: 'Գայանե Օհանյան', email: 'gayane@example.com', role: 'Օգտատեր' }
    ];
}

function saveUsersData(users) {
    localStorage.setItem('adminUsers', JSON.stringify(users));
}

// Music Data
function getMusicData() {
    const stored = localStorage.getItem('adminMusic');
    if (stored) return JSON.parse(stored);
    return [
        { id: 1, title: 'Անշուշտ Բաթ', composer: 'Անատոլի', duration: '4:32' },
        { id: 2, title: 'Թալինի Թաղ', composer: 'Կոմիտաս', duration: '3:45' },
        { id: 3, title: 'Ծիծաղ Շար', composer: 'Գավիթ Օհանյան', duration: '5:12' },
        { id: 4, title: 'Դադար Լույս', composer: 'Վարուժան Հեքիմյան', duration: '4:08' }
    ];
}

function saveMusicData(music) {
    localStorage.setItem('adminMusic', JSON.stringify(music));
}

// Tests Data
function getTestsData() {
    const stored = localStorage.getItem('adminTests');
    if (stored) return JSON.parse(stored);
    return [
        { id: 1, name: 'Հայ Մշակույթ', questions: 5, difficulty: 'Միջինակ', submissions: 234 },
        { id: 2, name: 'Հայ Պատմություն', questions: 5, difficulty: 'Բարձր', submissions: 189 },
        { id: 3, name: 'Հայ Լեզու', questions: 5, difficulty: 'Միջինակ', submissions: 156 }
    ];
}

function saveTestsData(tests) {
    localStorage.setItem('adminTests', JSON.stringify(tests));
}

// Quizzes Data
function getQuizzesData() {
    const stored = localStorage.getItem('adminQuizzes');
    if (stored) return JSON.parse(stored);
    return [
        { id: 1, name: 'Տրամաբանական Հարցեր', difficulty: '★★★', questions: 4 },
        { id: 2, name: 'Ընդհանուր Գիտելիքներ', difficulty: '★★', questions: 4 },
        { id: 3, name: 'Գիտական Հարցեր', difficulty: '★★★★', questions: 4 },
        { id: 4, name: 'Հայ Գրականություն', difficulty: '★★★', questions: 4 }
    ];
}

function saveQuizzesData(quizzes) {
    localStorage.setItem('adminQuizzes', JSON.stringify(quizzes));
}

// ==================== ADD FUNCTIONS ====================

// Add New User
function addNewUser() {
    const userName = prompt('Մուտքագրեք օգտատերի անուն:');
    if (userName && userName.trim() !== '') {
        const userEmail = prompt('Մուտքագրեք էլ. հասցե:');
        if (userEmail && userEmail.trim() !== '') {
            const users = getUsersData();
            users.push({
                id: Math.max(...users.map(u => u.id || 0)) + 1,
                name: userName,
                email: userEmail,
                role: 'Օգտատեր'
            });
            saveUsersData(users);
            alert('Նոր օգտատեր "' + userName + '" հաջողությամբ ավելացվել է!');
            loadUsersTable();
        }
    }
}

// Add New Music
function addNewMusic() {
    const musicTitle = prompt('Մուտքագրեք երաժշտության անուն:');
    if (musicTitle && musicTitle.trim() !== '') {
        const composer = prompt('Մուտքագրեք կազմիչի անուն:');
        if (composer && composer.trim() !== '') {
            const music = getMusicData();
            music.push({
                id: Math.max(...music.map(m => m.id || 0)) + 1,
                title: musicTitle,
                composer: composer,
                duration: '0:00'
            });
            saveMusicData(music);
            alert('"' + musicTitle + '" երաժշտությունը հաջողությամբ ավելացվել է!');
            loadMusicGrid();
        }
    }
}

// Upload Music from File
function uploadMusic() {
    const titleInput = document.getElementById('music-title-upload');
    const composerInput = document.getElementById('music-composer-upload');
    const fileInput = document.getElementById('music-file-upload');
    
    const title = titleInput ? titleInput.value.trim() : '';
    const composer = composerInput ? composerInput.value.trim() : '';
    const file = fileInput ? fileInput.files[0] : null;
    
    if (!title) {
        alert('Վալ մուտքագրեք երաժշտության վերնագիր!');
        return;
    }
    if (!composer) {
        alert('Վալ մուտքագրեք կազմիչի անուն!');
        return;
    }
    if (!file) {
        alert('Վալ ընտրեք MP3 ֆայլ!');
        return;
    }
    
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
        alert('Ֆայլի չափը պետք է լինի 10MB-ից փոքր!');
        return;
    }
    
    // Read file and convert to base64
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const music = getMusicData();
            const audioData = e.target.result;
            
            music.push({
                id: Math.max(...music.map(m => m.id || 0)) + 1,
                title: title,
                composer: composer,
                duration: '0:00',
                audioData: audioData
            });
            
            saveMusicData(music);
            alert('"' + title + '" երաժշտությունը հաջողությամբ ներբեռնվել է!');
            
            // Clear inputs
            if (titleInput) titleInput.value = '';
            if (composerInput) composerInput.value = '';
            if (fileInput) fileInput.value = '';
            
            loadMusicGrid();
        } catch (error) {
            alert('Սխալ ֆայլ ներբեռնելիս: ' + error.message);
        }
    };
    reader.readAsDataURL(file);
}

// Add New Test
function addNewTest() {
    const testName = prompt('Մուտքագրեք թեստի անուն:');
    if (testName && testName.trim() !== '') {
        const questionCount = prompt('Հարցերի քանակ:');
        if (questionCount && !isNaN(questionCount)) {
            const tests = getTestsData();
            tests.push({
                id: Math.max(...tests.map(t => t.id || 0)) + 1,
                name: testName,
                questions: parseInt(questionCount),
                difficulty: 'Միջինակ',
                submissions: 0
            });
            saveTestsData(tests);
            alert('"' + testName + '" թեստ (' + questionCount + ' հարց) հաջողությամբ ավելացվել է!');
            loadTestsTable();
        }
    }
}

// Add New Quiz
function addNewQuiz() {
    const quizName = prompt('Մուտքագրեք վիկտորինայի անուն:');
    if (quizName && quizName.trim() !== '') {
        const difficulty = prompt('Բարդության մակարդակ (Հեշտ/Միջինակ/Բարձր):');
        if (difficulty && difficulty.trim() !== '') {
            const quizzes = getQuizzesData();
            quizzes.push({
                id: Math.max(...quizzes.map(q => q.id || 0)) + 1,
                name: quizName,
                difficulty: difficulty,
                questions: 4
            });
            saveQuizzesData(quizzes);
            alert('"' + quizName + '" վիկտորինան հաջողությամբ ավելացվել է!');
            loadQuizzesGrid();
        }
    }
}

// ==================== DELETE FUNCTIONS ====================

function deleteUser(id) {
    if (confirm('Վստ կեք, որ ցանկանում եք ջնջել այս օգտատերին?')) {
        const users = getUsersData();
        const filtered = users.filter(u => u.id !== id);
        saveUsersData(filtered);
        alert('Օգտատերը ջնջվել է!');
        loadUsersTable();
    }
}

function deleteMusic(id) {
    if (confirm('Վստ կեք, որ ցանկանում եք ջնջել այս երաժշտությունը?')) {
        const music = getMusicData();
        const filtered = music.filter(m => m.id !== id);
        saveMusicData(filtered);
        alert('Երաժշտությունը ջնջվել է!');
        loadMusicGrid();
        // Update main website music as well
        if (typeof loadDataFromAdmin === 'function') {
            // This will be called from index.html if it's open
        }
    }
}

function deleteTest(id) {
    if (confirm('Վստ կեք, որ ցանկանում եք ջնջել այս թեստը?')) {
        const tests = getTestsData();
        const filtered = tests.filter(t => t.id !== id);
        saveTestsData(filtered);
        alert('Թեստը ջնջվել է!');
        loadTestsTable();
    }
}

function deleteQuiz(id) {
    if (confirm('Վստ կեք, որ ցանկանում եք ջնջել այս վիկտորինան?')) {
        const quizzes = getQuizzesData();
        const filtered = quizzes.filter(q => q.id !== id);
        saveQuizzesData(filtered);
        alert('Վիկտորինան ջնջվել է!');
        loadQuizzesGrid();
    }
}

// ==================== EDIT FUNCTIONS ====================

function editUser(id) {
    const users = getUsersData();
    const user = users.find(u => u.id === id);
    if (!user) return;
    
    const newName = prompt('Խմբագրել անունը:', user.name);
    if (newName && newName.trim() !== '') {
        user.name = newName;
        saveUsersData(users);
        alert('Օգտատերը թարմացվել է!');
        loadUsersTable();
    }
}

function editMusic(id) {
    const music = getMusicData();
    const track = music.find(m => m.id === id);
    if (!track) return;
    
    const newTitle = prompt('Խմբագրել վերնագիրը:', track.title);
    if (newTitle && newTitle.trim() !== '') {
        track.title = newTitle;
        saveMusicData(music);
        alert('Երաժշտությունը թարմացվել է!');
        loadMusicGrid();
    }
}

function editTest(id) {
    const tests = getTestsData();
    const test = tests.find(t => t.id === id);
    if (!test) return;
    
    const newName = prompt('Խմբագրել թեստի անունը:', test.name);
    if (newName && newName.trim() !== '') {
        test.name = newName;
        saveTestsData(tests);
        alert('Թեստը թարմացվել է!');
        loadTestsTable();
    }
}

function editQuiz(id) {
    const quizzes = getQuizzesData();
    const quiz = quizzes.find(q => q.id === id);
    if (!quiz) return;
    
    const newName = prompt('Խմբագրել վիկտորինայի անունը:', quiz.name);
    if (newName && newName.trim() !== '') {
        quiz.name = newName;
        saveQuizzesData(quizzes);
        alert('Վիկտորինան թարմացվել է!');
        loadQuizzesGrid();
    }
}

// ==================== LOAD FUNCTIONS ====================

function loadUsersTable() {
    const tbody = document.querySelector('#users-section .admin-table tbody');
    if (!tbody) return;
    const users = getUsersData();
    tbody.innerHTML = users.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button class="btn-small btn-edit" onclick="editUser(${user.id})">Խմբագրել</button>
                <button class="btn-small btn-delete" onclick="deleteUser(${user.id})">Ջնջել</button>
            </td>
        </tr>
    `).join('');
}

function loadMusicGrid() {
    const grid = document.querySelector('#music-section .content-grid');
    if (!grid) return;
    const music = getMusicData();
    grid.innerHTML = music.map(m => `
        <div class="content-card">
            <h3>${m.title}</h3>
            <p>Կազմիչ: ${m.composer}</p>
            <p>Տևողություն: ${m.duration}</p>
            ${m.audioData ? `<audio controls style="width: 100%; margin: 1rem 0;"><source src="${m.audioData}" type="audio/mpeg"></audio>` : ''}
            <div class="card-actions">
                <button class="btn-small btn-edit" onclick="editMusic(${m.id})">Խմբագրել</button>
                <button class="btn-small btn-delete" onclick="deleteMusic(${m.id})">Ջնջել</button>
            </div>
        </div>
    `).join('');
}

function loadTestsTable() {
    const tbody = document.querySelector('#tests-section .admin-table tbody');
    if (!tbody) return;
    const tests = getTestsData();
    tbody.innerHTML = tests.map(test => `
        <tr>
            <td>${test.name}</td>
            <td>${test.questions}</td>
            <td>${test.difficulty}</td>
            <td>${test.submissions}</td>
            <td>
                <button class="btn-small btn-edit" onclick="editTest(${test.id})">Խմբագրել</button>
                <button class="btn-small btn-delete" onclick="deleteTest(${test.id})">Ջնջել</button>
            </td>
        </tr>
    `).join('');
}

function loadQuizzesGrid() {
    const grid = document.querySelector('#quizzes-section .content-grid');
    if (!grid) return;
    const quizzes = getQuizzesData();
    grid.innerHTML = quizzes.map(quiz => `
        <div class="content-card">
            <h3>${quiz.name}</h3>
            <p>Բարդություն: ${quiz.difficulty}</p>
            <p>Հարցեր: ${quiz.questions}</p>
            <div class="card-actions">
                <button class="btn-small btn-edit" onclick="editQuiz(${quiz.id})">Խմբագրել</button>
                <button class="btn-small btn-delete" onclick="deleteQuiz(${quiz.id})">Ջնջել</button>
            </div>
        </div>
    `).join('');
}

function loadAllData() {
    setTimeout(() => {
        loadUsersTable();
        loadMusicGrid();
        loadTestsTable();
        loadQuizzesGrid();
    }, 100);
}

// ==================== SETTINGS ====================

// Save Settings
function saveSettings() {
    const siteName = document.querySelector('.settings-form input[type="text"]').value;
    if (siteName && siteName.trim() !== '') {
        alert('Կարգավորումները պահվել են հաջողությամբ!');
        localStorage.setItem('siteSettings', JSON.stringify({
            siteName: siteName,
            timestamp: new Date().toLocaleString('hy-AM')
        }));
    } else {
        alert('Վալ լրացրեք բոլոր պահանջվող դաշտերը!');
    }
}

// ==================== INITIALIZATION ====================

window.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        loadAllData();
    }
});

// Listen for changes in other tabs
window.addEventListener('storage', function(e) {
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        if (e.key === 'adminMusic' || e.key === 'adminUsers' || e.key === 'adminTests' || e.key === 'adminQuizzes') {
            loadAllData();
        }
    }
});