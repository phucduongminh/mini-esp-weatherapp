import SQLite from 'react-native-sqlite-storage';

// open the database or create it if not exists
export const openDatabase = () => {
  return new Promise((resolve, reject) => {
    SQLite.openDatabase(
      {
        name: 'app',
        createFromLocation: '~database/app.sqlite',
      },
      db => {
        // create the table if not exists
        db.executeSql(
          'CREATE TABLE IF NOT EXISTS data (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, age INTEGER NOT NULL);',
          [],
          () => {
            resolve(db);
          },
          error => {
            console.log('Error creating table:', error);
            reject(error);
          }
        );
      },
      error => {
        console.log('Error opening database:', error);
        reject(error);
      }
    );
  });
};

// insert data into the table
export const insertData = (id,name, age) => {
  return openDatabase().then(db => {
    return new Promise<void>((resolve, reject) => {
      (db as SQLite.SQLiteDatabase).executeSql(
        'INSERT INTO data (id, name, age) VALUES (?,?, ?);',
        [id, name, age],
        () => {
          resolve();
        },
        error => {
          console.log('Error inserting data:', error);
          reject(error);
        }
      );
    });
  });
};

// get data from the table
export const getData = () => {
  return openDatabase().then(db => {
    return new Promise((resolve, reject) => {
      (db as SQLite.SQLiteDatabase).transaction(tx => {
        tx.executeSql('SELECT * FROM data;', [], (tx, results) => {
          let data = [];
          for (let i = 0; i < results.rows.length; i++) {
            data.push(results.rows.item(i));
          }
          resolve(data);
        }, error => {
          reject(error);
        });
      });
    });
  });
};
