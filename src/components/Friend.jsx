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
