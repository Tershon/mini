document.getElementById('startBtn').addEventListener('click', function() {
    window.location.href = 'https://skillbox.kz/course/profession-developer/?utm_source=yandex&utm_medium=cpc&utm_campaign=3000_code_yandex_cpc_poisk_course_kz_code_skillbox_109263056&utm_content=adg_5428445056|ad_16016725632|ph_51074031616|key_%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8E%20%D1%81%20%D0%BD%D1%83%D0%BB%D1%8F|dev_desktop|pst_premium_1|rgnid_190_%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B4%D0%B0%D1%80|placement_none|creative_{creative_name}&utm_term=%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8E%20%D1%81%20%D0%BD%D1%83%D0%BB%D1%8F&yclid=8285159717130207231'; // Замените на ваш URL
});

document.getElementById('orderBtn').addEventListener('click', function() {
    document.getElementById('orderModal').classList.remove('hidden');
});

document.getElementById('closeOrderModal').addEventListener('click', function() {
    document.getElementById('orderModal').classList.add('hidden');
});

document.getElementById('profileBtn').addEventListener('click', function() {
    document.getElementById('languageModal').classList.remove('hidden');
});

document.getElementById('closeLanguageModal').addEventListener('click', function() {
    document.getElementById('languageModal').classList.add('hidden');
});

// Обработка формы заказа курса
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const language = document.getElementById('language').value;
    const promo = document.getElementById('promo').value;

    fetch('https://api.example.com/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email, language, promo })
    })
    .then(response => response.json())
    .then(data => {
        alert('Заказ успешно отправлен!');
        document.getElementById('orderModal').classList.add('hidden');
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});

// Запрос курсов с API
fetch('https://api.example.com/courses')
    .then(response => response.json())
    .then(courses => {
        const coursesDiv = document.getElementById('courses');
        courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'course';
            courseElement.innerHTML = `<h3>${course.name}</h3><p>${course.description}</p>`;
            coursesDiv.appendChild(courseElement);
        });
    })
    .catch(error => {
        console.error('Ошибка при загрузке курсов:', error);
    });

// Обработка выбора языка
document.getElementById('saveLanguage').addEventListener('click', function() {
    const selectedLanguage = document.getElementById('languageSelect').value;
    translateInterface(selectedLanguage);
    document.getElementById('languageModal').classList.add('hidden');
});

// Функция для перевода интерфейса
function translateInterface(language) {
    const translations = {
        ru: {
            welcomeMessage: "Добро пожаловать в систему обучения!",
            orderTitle: "Заказ курса",
            nameLabel: "Введите ваше имя:",
            phoneLabel: "Введите ваш номер телефона:",
            emailLabel: "Ваш Gmail:",
            languageLabel: "Язык программирования:",
            promoLabel: "Промокод (если есть):"
        },
        kk: {
            welcomeMessage: "Оқыту жүйесіне қош келдіңіз!",
            orderTitle: "Курс тапсырысы",
            nameLabel: "Атыңызды енгізіңіз:",
            phoneLabel: "Телефон нөміріңізді енгізіңіз:",
            emailLabel: "Сіздің Gmail:",
            languageLabel: "Бағдарламалау тілі:",
            promoLabel: "Промокод (егер болса):"
        },
        en: {
            welcomeMessage: "Welcome to the learning system!",
            orderTitle: "Order Course",
            nameLabel: "Enter your name:",
            phoneLabel: "Enter your phone number:",
            emailLabel: "Your Gmail:",
            languageLabel: "Programming Language:",
            promoLabel: "Promo code (if any):"
        }
    };

    document.getElementById('welcomeMessage').innerText = translations[language].welcomeMessage;
    document.getElementById('orderTitle').innerText = translations[language].orderTitle;
    document.getElementById('nameLabel').innerText = translations[language].nameLabel;
    document.getElementById('phoneLabel').innerText = translations[language].phoneLabel;
    document.getElementById('emailLabel').innerText = translations[language].emailLabel;
    document.getElementById('languageLabel').innerText = translations[language].languageLabel;
    document.getElementById('promoLabel').innerText = translations[language].promoLabel;
}

// Функция для создания звезд
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Устанавливаем случайные размеры и позиции
    const size = Math.random() * 3 + 2; // Размер от 2 до 5px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Устанавливаем случайную позицию по X
    star.style.left = `${Math.random() * 100}vw`;
    
    // Устанавливаем анимацию падения со случайной продолжительностью
    star.style.animationDuration = `${Math.random() * 2 + 3}s`; // От 3 до 5 секунд
    
    // Добавляем звезду в body
    document.body.appendChild(star);
    
    // Удаляем звезду после завершения анимации
    star.addEventListener('animationend', () => {
        star.remove();
    });
}



document.addEventListener('DOMContentLoaded', () => {
    const profileBtn = document.getElementById('profileBtn');
    const startBtn = document.getElementById('startBtn');
    const orderBtn = document.getElementById('orderBtn');
    const orderModal = document.getElementById('orderModal');
    const closeOrderModal = document.getElementById('closeOrderModal');
    const languageModal = document.getElementById('languageModal');
    const closeLanguageModal = document.getElementById('closeLanguageModal');
    const saveLanguage = document.getElementById('saveLanguage');

    // Открытие модального окна для заказа
    orderBtn.addEventListener('click', () => {
        orderModal.classList.remove('hidden');
    });

    // Закрытие модального окна для заказа
    closeOrderModal.addEventListener('click', () => {
        orderModal.classList.add('hidden');
    });

    // Открытие модального окна выбора языка
    profileBtn.addEventListener('click', () => {
        languageModal.classList.remove('hidden');
    });

    // Закрытие модального окна выбора языка
    closeLanguageModal.addEventListener('click', () => {
        languageModal.classList.add('hidden');
    });

    // Сохранение выбранного языка
    saveLanguage.addEventListener('click', () => {
        const selectedLanguage = document.getElementById('languageSelect').value;
        alert(`Выбран язык: ${selectedLanguage}`);
        languageModal.classList.add('hidden');
    });

    // Пример отправки формы
    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Форма отправлена');
        orderModal.classList.add('hidden'); // Закрыть модальное окно после отправки
    });
});




// Генерируем звезды каждые 300 миллисекунд
setInterval(createStar, 300);


let coinCount = 0;

document.getElementById('startBtn').addEventListener('click', function() {
    window.location.href = 'https://skillbox.kz/course/profession-developer/?utm_source=yandex&utm_medium=cpc&utm_campaign=3000_code_yandex_cpc_poisk_course_kz_code_skillbox_109263056&yclid=8285159717130207231'; // Замените на ваш URL
});

document.getElementById('orderBtn').addEventListener('click', function() {
    document.getElementById('orderModal').classList.remove('hidden');
});

document.getElementById('quizBtn').addEventListener('click', function() {
    startQuiz();
});

function startQuiz() {
    let correctAnswers = 0;

    for (let i = 0; i < 10; i++) {
        let answer = prompt(`Вопрос ${i + 1}: Какой ответ правильный?`); // Пример вопроса, замените на ваши
        if (answer === 'правильный ответ') {
            correctAnswers++;
        }
    }

    if (correctAnswers === 10) {
        coinCount += 10;
        alert('Поздравляем! Вы заработали 10 монеток!');
    } else {
        alert('К сожалению, вы не ответили правильно на все вопросы.');
    }

    document.getElementById('coinCount').innerText = coinCount;
}

document.getElementById('closeOrderModal').addEventListener('click', function() {
    document.getElementById('orderModal').classList.add('hidden');
});

document.getElementById('profileBtn').addEventListener('click', function() {
    document.getElementById('profile').classList.remove('hidden');
});

document.getElementById('closeProfile').addEventListener('click', function() {
    document.getElementById('profile').classList.add('hidden');
});

// Остальные обработчики...


