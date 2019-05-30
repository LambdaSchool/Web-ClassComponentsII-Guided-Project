import React from 'react';


export default function Friend({ friend, deleteFriend, markAsEnemy, setFriendToBeEdited }) {
  const onEdit = event => {
    // One liner. Implement using setFriendToBeEdited
  };

  const onDelete = event => {
    // One liner. Implement using deleteFriend
  };

  const onMarkEnemy = event => {
    // One liner. Implement using markAsEnemy
  };

  const friendStyle = {
    color: friend.friendly ? 'green' : 'red',
  };

  return (
    <div>
      <span style={friendStyle}>{friend.name} is {friend.age}</span>

      <button onClick={onEdit} className='small'>Edit</button>
      <button onClick={onDelete} className='small danger'>Delete</button>
      <button onClick={onMarkEnemy} className='small alert'>Mark as Enemy</button>
    </div>
  );
}
