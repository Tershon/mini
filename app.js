const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static('public'));

// Обработка данных для регистрации
app.post('/register', (req, res) => {
    const { nickname } = req.body;

    // Сохраняем пользователя в users.json
    const users = JSON.parse(fs.readFileSync('users.json', 'utf-8') || '[]');
    users.push({ nickname });
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));

    res.send('Регистрация прошла успешно!');
});

// Маршрут для заказа обучения
app.post('/order', (req, res) => {
    const { name, email, course, price } = req.body;

    const orderData = { name, email, course, price };
    fs.appendFileSync('orders.json', JSON.stringify(orderData) + '\n');
    res.send('Ваш заказ был успешно отправлен!');
});

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
