import React from 'react';


export default function Friend({ friend, deleteFriend, setCurrentFriendId }) {
  // `deleteFriend` and `setCurrentFriendId` are not going to work in those onClick handlers...

  return (
    <div>
      <span>{friend.name} is {friend.age}</span>

      <button onClick={setCurrentFriendId} className='small'>Edit Friend</button>
      <button onClick={deleteFriend} className='small danger'>Delete Friend</button>
    </div>
  );
}
