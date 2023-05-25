const { createTableSql, database } = require('../constants/consts');

const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database(database, (err) => {
    if (err) {
        alert(err.message)
        console.error(err);
    } else {
        console.log('Connected to the database');
    }
});

function createTable() {
    db.run(createTableSql, function (err) {
        if (err) {
            alert(err)
            console.error(err.message);
        } else {
            console.log('Users table created or already exists');
        }
    });

}

function insertLesson() {
    const insertSql = `INSERT INTO ${table} (name, email) VALUES (?, ?)`;
    const values = ['John Doe', 'john.doe@example.com'];

    db.run(insertSql, values, function (err) {
        if (err) {
            console.error(err.message);
        } else {
            console.log(`A new user has been inserted with ID ${this.lastID}`);
        }
    });
}


db.close((err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Database connection closed');
    }
});
