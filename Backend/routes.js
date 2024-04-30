const express = require('express');
const router = express.Router();


let data = [
    { id: 1, name: 'pavan', age: 20 },
    { id: 2, name: 'rat', age: 65 },
    { id: 3, name: 'nikhil', age: 23 }
];


router.post('/create', (req, res) => {
    const newItem = req.body; 
    newItem.id = data.length + 1;
    data.push(newItem);
    res.json(newItem);
});

router.get('/read', (req, res) => {
    res.json(data);
});


router.put('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updateItem = req.body; 
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data[index] = { ...data[index], ...updateItem };
        res.json(data[index]);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

router.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        const deletedItem = data.splice(index, 1);
        res.json(deletedItem);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

module.exports = router;
