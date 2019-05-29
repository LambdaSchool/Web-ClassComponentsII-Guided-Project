import React from 'react';


export default function FriendEditor({
  form,
  onFriendAdd,
  onFriendUpdate,
  isEditing,
  inputChange,
}) {
  const onNameChange = event => {
    // you'll need inputChange
  };

  const onAgeChange = event => {
    // you'll need inputChange
  };

  return (
    <div className='sub-container'>
      {
        isEditing
          ? <h3>Edit Friend</h3>
          : <h3>Add a new friend!</h3>
      }

      name:
      <input
        type="text"
        value={form.nameValue}
        onChange={onNameChange}
      />

      age:
      <input
        type="text"
        value={form.ageValue}
        onChange={onAgeChange}
      />

      {
        isEditing
          ? <button onClick={onFriendUpdate}>Update Friend!</button>
          : <button onClick={onFriendAdd}>Add Friend!</button>
      }
    </div>
  );
}
