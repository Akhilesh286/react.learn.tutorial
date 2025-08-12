import Dexie from 'dexie'

const db = new Dexie('todoDB')

db.version(1).stores({
    "todos":'id, name, completed, dayID',
    "days":'id, label'
})

export default db

/*

import Dexie from 'dexie';

// Create database instance
const db = new Dexie('testDB');

// Define schema
db.version(1).stores({
  items: 'id, name'
});



// Create (Add)
async function addItem(id, name) {
  await db.items.add({ id, name });
  console.log('Item added');
}

// Read (Get All)
async function getAllItems() {
  const items = await db.items.toArray();
  console.log('All items:', items);
}

// Update (by id)
async function updateItem(id, newName) {
  await db.items.update(id, { name: newName });
  console.log('Item updated');
}

// Delete (by id)
async function deleteItem(id) {
  await db.items.delete(id);
  console.log('Item deleted');
}
*/