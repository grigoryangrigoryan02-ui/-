// Test Data
const testData = {
    culture: {
        title: 'Հայ Մշակույթ Թեստ',
        questions: [
            {
                question: 'Հայերի ազգային այբուբենը ստեղծել է?',
                options: ['Մեսրոպ Մաշտոց', 'Վաղարշապ', 'Ստեփանոս Օրբելյան', 'Գրիգոր Նաբեցի'],
                correct: 0
            },
            {
                question: 'Հայ մշակույթի հավերժական խորհուրդը հանդիսանում է?',
                options: ['Մուսիկա', 'Պարույր', 'Գրականություն', 'Բոլորը'],
                correct: 3
            },
            {
                question: 'Հայ խաչքար կոչվում է?',
                options: ['Քրիստական փուստ', 'Խաչքար', 'Տաճար', 'Մատենավար'],
                correct: 1
            },
            {
                question: 'Հայ ժամանցային պարի անունը?',
                options: ['Կասաղ', 'Շաղախո', 'Թալինի թաղ', 'Բյուզե'],
                correct: 1
            },
            {
                question: 'Հայ ազգային տոնը նշվում է որ ամսին?',
                options: ['Մայիս', 'Հունիս', 'Ապրիլ', 'Հուլիս'],
                correct: 0
            }
        ]
    },
    history: {
        title: 'Հայ Պատմություն Թեստ',
        questions: [
            {
                question: 'Հայկական պետականությունը հաստատվել է?',
                options: ['330 թ.', '301 թ.', '189 թ.', '450 թ.'],
                correct: 1
            },
            {
                question: 'Հայ մեծ թագավորներից մեկը հանդիսանում է?',
                options: ['Տիգրան II', 'Պետրոս I', 'Իվան III', 'Խոսրով I'],
                correct: 0
            },
            {
                question: 'Հայ առաջին քրիստոնեական տերը?',
                options: ['Գրիգոր Լուսավորիչ', 'Գրիգոր Բակուրիցի', 'Հայրապետ Գրիգոր', 'Ստեփանոս I'],
                correct: 0
            },
            {
                question: 'Պարսկ-հայ պատերազմ մեկնարկել է?',
                options: ['1804 թ.', '1826 թ.', '1848 թ.', '1915 թ.'],
                correct: 1
            },
            {
                question: 'Արաբական միջնադարում Հայաստանում կար?',
                options: ['Մեկ նահանգ', 'Շատ տիրապետներ', 'Կալիֆատ', 'Բյուզանդական նահանգ'],
                correct: 1
            }
        ]
    },
    language: {
        title: 'Հայ Լեզու Թեստ',
        questions: [
            {
                question: 'Հայ այբուբենում քանի տառ կա?',
                options: ['32', '36', '38', '40'],
                correct: 2
            },
            {
                question: 'Հայ լեզվի հնագույն տեսքը կոչվում է?',
                options: ['Ժամանակակից', 'Հին հայ', 'Վանական', 'Բաղնական'],
                correct: 1
            },
            {
                question: 'Հայ լեզվին պատկանում են?',
                options: ['Հինդո-եվրոպական', 'Սեմական', 'Շինական', 'Բանտու'],
                correct: 0
            },
            {
                question: '"Մատենավար" բառի իմաստ?',
                options: ['Գրողական', 'Գրեց', 'Գրախոս', 'Կրտսեր'],
                correct: 0
            },
            {
                question: 'Հայ լեզվում տառերի հերթականության նորմային?',
                options: ['Այբեկական կարգ', 'Ապաբեկական կարգ', 'Տառային կարգ', 'Հնագույն կարգ'],
                correct: 0
            }
        ]
    },
    travel: {
        title: 'Հայ Ճանապարհորդություն Թեստ',
        questions: [
            {
                question: 'Գեղարդավank տերունի հիմնել?',
                options: ['Գրիգոր', 'Կաթողիկոս', 'Թաղավոր', 'Թագավոր'],
                correct: 2
            },
            {
                question: 'Արարատ լեռը գտնվում է?',
                options: ['Հայաստանում', 'Թուրքիայում', 'Վերջիններիս', 'Բոլորին սահմանում'],
                correct: 3
            },
            {
                question: 'Մատենադարան գտնվում է?',
                options: ['Գյումրում', 'Ճանապարհում', 'Երևանում', 'Վանում'],
                correct: 2
            },
            {
                question: 'Կղզե Ծաղրա գտնվում է?',
                options: ['Սևանի լճում', 'Արաքսի գետում', 'Եփրատի գետում', 'Մեծ լճում'],
                correct: 0
            },
            {
                question: 'Հայի մայրաքաղաք?',
                options: ['Գյումրի', 'Վանաձոր', 'Երևան', 'Վայք'],
                correct: 2
            }
        ]
    }
};

// Quiz Data
const quizData = {
    logic: {
        title: 'Տրամաբանական Հարցեր',
        questions: [
            {
                question: '2 + 2 * 2 = ?',
                options: ['6', '8', '4', '16'],
                correct: 0
            },
            {
                question: 'Հաջորդ թիվը շարքում: 2, 4, 8, 16, ?',
                options: ['24', '32', '28', '20'],
                correct: 1
            },
            {
                question: 'Որն է տարածավ?',
                options: ['Կրկնական', 'Տրամաբանական', 'Մաթեմատիկական', 'Հարցական'],
                correct: 0
            },
            {
                question: 'Եթե 3 = 18, 4 = 32, 5 = 50, ապա 6 = ?',
                options: ['60', '72', '66', '84'],
                correct: 1
            }
        ]
    },
    general: {
        title: 'Ընդհանուր Գիտելիքներ',
        questions: [
            {
                question: 'Հաշվել Մայրցամբ հանդիսանում է?',
                options: ['Հյուսիսային', 'Հարավային', 'Արևային', 'Մեծ'],
                correct: 1
            },
            {
                question: 'Հայաստանի մայրաքաղաք?',
                options: ['Գյումրի', 'Վանաձոր', 'Երևան', 'Շիրակ'],
                correct: 2
            },
            {
                question: 'Ինչ գույն այբուբե?',
                options: ['Կարմիր', 'Կապույտ', 'Կանաչ', 'Դեղին'],
                correct: 1
            },
            {
                question: 'Շատ բնակիչ ունեցող շենք կոչվում է?',
                options: ['Տուն', 'Բնակարան', 'Վաղ', 'Բարձրահարկ'],
                correct: 3
            }
        ]
    },
    science: {
        title: 'Գիտական Հարցեր',
        questions: [
            {
                question: 'Ջրի բանաձեւ?',
                options: ['H2O', 'HO2', 'H2O2', 'HO'],
                correct: 0
            },
            {
                question: 'Ինչ խորհրդանիշ ունի ոսկի?',
                options: ['Go', 'Gd', 'Au', 'Ag'],
                correct: 2
            },
            {
                question: 'Մեծ մոլեկուլ կոչվում է?',
                options: ['Սմալ', 'Մեծ', 'Կախ', 'Մոտոր'],
                correct: 0
            },
            {
                question: 'Ձայնի արագություն հավասար?',
                options: ['300 կմ/վ', '340 մ/վ', '400 մ/վ', '200 կմ/վ'],
                correct: 1
            }
        ]
    },
    literature: {
        title: 'Հայ Գրականություն',
        questions: [
            {
                question: 'Ով գրել "Դավիթ Բեկ"?',
                options: ['Պետրոս Թերզյան', 'Պետրոս Լաչիա', 'Պետրոս Վաղարշյան', 'Պետրոս Մալխասյան'],
                correct: 0
            },
            {
                question: 'Ով գրել "Չար"?',
                options: ['Վաղարշ Վաղարշյան', 'Վաղարշ Տեր-Վաղարյան', 'Վաղարշ Լաչիա', 'Վաղարշ Վարյան'],
                correct: 1
            },
            {
                question: 'Հայ դրամատուրգ Պետրոս Թերզյանի հայտնի աշխատան?',
                options: ['Աղմուկ', 'Մանկուկ', 'Ծաղիկ', 'Դավիթ Բեկ'],
                correct: 3
            },
            {
                question: 'Ով գրել "Մեր մեծ հայտնի"?',
                options: ['Վաղարշ', 'Հայր Կաթողիկոս', 'Պետրոս', 'Գրիգոր'],
                correct: 0
            }
        ]
    }
};

// Show/Hide Sections
function showSection(sectionName) {
    console.log('showSection called with:', sectionName);
    
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    console.log('Found sections:', sections.length);
    
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const sectionId = sectionName + '-section';
    console.log('Looking for:', sectionId);
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
        window.scrollTo(0, 0);
        console.log('Section shown:', sectionId);
    } else {
        console.log('Section not found:', sectionId);
    }
    
    return false;
}

// Load data from localStorage or use default
function loadDataFromAdmin() {
    // Load music from admin
    const adminMusic = localStorage.getItem('adminMusic');
    if (adminMusic) {
        try {
            const musicList = JSON.parse(adminMusic);
            if (musicList && musicList.length > 0) {
                updateMusicSection(musicList);
            }
        } catch (e) {
            console.log('Error loading music from admin');
        }
    }
}

// Listen for changes from admin panel (localStorage changes)
window.addEventListener('storage', function(e) {
    if (e.key === 'adminMusic') {
        loadDataFromAdmin();
    }
});

// Test Functions
function startTest(testType) {
    const test = testData[testType];
    const modal = document.getElementById('test-modal');
    const titleElement = document.getElementById('test-title');
    const questionsContainer = document.getElementById('test-questions');

    titleElement.textContent = test.title;
    questionsContainer.innerHTML = '';

    test.questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h4>${index + 1}. ${q.question}</h4>
            ${q.options.map((option, optIndex) => `
                <label>
                    <input type="radio" name="test-q${index}" value="${optIndex}">
                    ${option}
                </label>
            `).join('')}
        `;
        questionsContainer.appendChild(questionDiv);
    });

    modal.classList.remove('hidden');
}

function closeTest() {
    document.getElementById('test-modal').classList.add('hidden');
}

function submitTest() {
    const testTitle = document.getElementById('test-title').textContent;
    const questions = document.querySelectorAll('#test-questions .question');
    let score = 0;
    let answered = 0;

    // Find the test type from title
    let testType = '';
    for (let type in testData) {
        if (testData[type].title === testTitle) {
            testType = type;
            break;
        }
    }

    questions.forEach((q, index) => {
        const selected = q.querySelector('input[type="radio"]:checked');
        if (selected) {
            answered++;
            if (parseInt(selected.value) === testData[testType].questions[index].correct) {
                score++;
            }
        }
    });

    if (answered === 0) {
        alert('Բայց հարց չընտրեցիք։ Փորձեք կրկին');
    } else {
        const percentage = Math.round((score / answered) * 100);
        alert(`Ձեր արդյունքը: ${score}/${answered} (${percentage}%)\nՀաջողություն!`);
    }
    closeTest();
}

// Quiz Functions
function startQuiz(quizType) {
    const quiz = quizData[quizType];
    const modal = document.getElementById('quiz-modal');
    const titleElement = document.getElementById('quiz-title');
    const contentContainer = document.getElementById('quiz-content');

    titleElement.textContent = quiz.title;
    contentContainer.innerHTML = '';

    quiz.questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h4>${index + 1}. ${q.question}</h4>
            ${q.options.map((option, optIndex) => `
                <label>
                    <input type="radio" name="quiz-q${index}" value="${optIndex}">
                    ${option}
                </label>
            `).join('')}
        `;
        contentContainer.appendChild(questionDiv);
    });

    modal.classList.remove('hidden');
}

function closeQuiz() {
    document.getElementById('quiz-modal').classList.add('hidden');
}

function submitQuiz() {
    const quizTitle = document.getElementById('quiz-title').textContent;
    const questions = document.querySelectorAll('#quiz-content .question');
    let score = 0;
    let answered = 0;

    // Find the quiz type from title
    let quizType = '';
    for (let type in quizData) {
        if (quizData[type].title === quizTitle) {
            quizType = type;
            break;
        }
    }

    questions.forEach((q, index) => {
        const selected = q.querySelector('input[type="radio"]:checked');
        if (selected) {
            answered++;
            if (parseInt(selected.value) === testData[testType].questions[index].correct) {
                score++;
            }
        }
    });

    if (answered === 0) {
        alert('Բայց հարց չընտրեցիք։ Փորձեք կրկին');
    } else {
        const percentage = Math.round((score / answered) * 100);
        alert(`Ձեր արդյունքը: ${score}/${answered} (${percentage}%)\nՀաջողություն!`);
    }
    closeTest();
}

// Update music section dynamically
function updateMusicSection(musicList) {
    const musicGrid = document.querySelector('.music-grid');
    if (!musicGrid) return;
    
    musicGrid.innerHTML = musicList.map(m => `
        <div class="music-card">
            <div class="music-player">
                <div class="music-icon">♪</div>
            </div>
            <h3>${m.title}</h3>
            <p>Կազմիչ: ${m.composer}</p>
            ${m.audioData ? `<audio controls style="width:100%; margin-top:1rem;"><source src="${m.audioData}" type="audio/mpeg"></audio>` : ''}
        </div>
    `).join('');
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const testModal = document.getElementById('test-modal');
    const quizModal = document.getElementById('quiz-modal');

    if (testModal && event.target === testModal) testModal.classList.add('hidden');
    if (quizModal && event.target === quizModal) quizModal.classList.add('hidden');
});

// Load data from localStorage or use default
function loadDataFromAdmin() {
    const adminMusic = localStorage.getItem('adminMusic');
    if (adminMusic) {
        try {
            const musicList = JSON.parse(adminMusic);
            if (musicList && musicList.length > 0) updateMusicSection(musicList);
        } catch (e) {
            console.log('Error loading music from admin', e);
        }
    }
}

// Listen for storage changes (sync across tabs)
window.addEventListener('storage', function(e) {
    if (['adminMusic','adminUsers','adminTests','adminQuizzes'].includes(e.key)) {
        loadDataFromAdmin();
    }
});

// Initialize: bind navigation buttons and show home
window.addEventListener('DOMContentLoaded', function() {
    // Bind all elements that have data-section attribute
    document.querySelectorAll('a[data-section], button[data-section]').forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            const section = el.dataset.section;
            if (section) showSection(section);
        });
    });

    showSection('home');
    loadDataFromAdmin();
});