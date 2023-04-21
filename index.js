const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        name: 'Ayush Kumar',
        semester: '4',
        cpi: 8.74
    });
})

app.listen(5000, () => {
    console.log(`Server running at http://localhost:5000/`);
});