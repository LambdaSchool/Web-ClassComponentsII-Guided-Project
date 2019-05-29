import React from 'react';


export default function Friend({ friend, deleteFriend, markAsEnemy, setCurrentFriendId }) {
  const onEdit = event => {
    // implement using setCurrentFriendId
  };

  const onDelete = event => {
    // implement using deleteFriend
  };

  const onMarkEnemy = event => {
    // implement using markAsEnemy
  };

  return (
    <div>
      <span>{friend.name} is {friend.age}</span>

      <button onClick={onEdit} className='small'>Edit</button>
      <button onClick={onDelete} className='small danger'>Delete</button>
      <button onClick={onMarkEnemy} className='small danger'>Mark as Enemy</button>
    </div>
  );
}
