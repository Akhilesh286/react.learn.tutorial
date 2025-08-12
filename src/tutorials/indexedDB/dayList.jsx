import React, { useState, useEffect } from 'react';
import db from './db';

function DaysList() {
  const [days, setDays] = useState([]);
  const [newDay, setNewDay] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedLabel, setEditedLabel] = useState('');

  // Fetch days from Dexie on mount
  useEffect(() => {
    fetchDays();
  }, []);

  const fetchDays = async () => {
    const allDays = await db.days.toArray();
    setDays(allDays);
  };

  // Add new day to Dexie and refresh list
  const handleAddDay = async () => {
    if (newDay.trim() === '') return;

    const dayItem = {
      id: Date.now(),
      label: newDay
    };

    await db.days.add(dayItem);
    setNewDay('');
    fetchDays();
  };

  // Delete a day from Dexie
  const handleDeleteDay = async (id) => {
    await db.days.delete(id);
    fetchDays();
  };

  // Start editing a day
  const handleEditDay = (id, label) => {
    setEditingId(id);
    setEditedLabel(label);
  };

  // Save updated day to Dexie
  const handleUpdateDay = async (id) => {
    await db.days.update(id, { label: editedLabel });
    setEditingId(null);
    setEditedLabel('');
    fetchDays();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Days List</h2>

      {/* Input to add new day */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newDay}
          onChange={(e) => setNewDay(e.target.value)}
          placeholder="Enter day label"
          style={{ padding: '8px', width: '70%' }}
        />
        <button
          onClick={handleAddDay}
          style={{ padding: '8px 12px', marginLeft: '10px' }}
        >
          Add Day
        </button>
      </div>

      {/* Table to show days */}
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Label</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day.id}>
              <td>{day.id}</td>
              <td>
                {editingId === day.id ? (
                  <input
                    type="text"
                    value={editedLabel}
                    onChange={(e) => setEditedLabel(e.target.value)}
                  />
                ) : (
                  day.label
                )}
              </td>
              <td>
                {editingId === day.id ? (
                  <>
                    <button onClick={() => handleUpdateDay(day.id)}>Save</button>
                    <button onClick={() => setEditingId(null)} style={{ marginLeft: '5px' }}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditDay(day.id, day.label)}>Edit</button>
                    <button
                      onClick={() => handleDeleteDay(day.id)}
                      style={{ marginLeft: '5px' }}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DaysList;
