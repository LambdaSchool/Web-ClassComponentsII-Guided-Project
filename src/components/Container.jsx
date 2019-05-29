import React from 'react';
import uuid from 'uuid';
import Friend from './Friend';
import FriendEditor from './FriendEditor';

const initialFormState = {
  nameValue: '',
  ageValue: '',
};

const initialState = {
  friends: [
    { id: uuid(), name: 'Tom', age: '35' },
    { id: uuid(), name: 'Luke', age: '27' },
    { id: uuid(), name: 'Josh', age: '34' },
  ],
  currentFriendId: null,
  form: initialFormState,
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  addFriend = (name, age) => {
    // using setState:
    // 1- add a new friend object to state.friends
    // 2- reset the form to its initial state
  }

  updateFriend = (id, name, age) => {
    // using setState:
    // 1- update an existing friend (the `id` tells us which friend to update)
    // 2- also reset currentFriendId to null
    // 3- reset the form to its initial state
  }

  deleteFriend = id => {
    // using setState:
    // 1- delete an existing friend (the `id` tells us which)
    // 2- also set currentFriendId to null
    // 3- reset the form to its initial state
  }

  setCurrentFriendId = id => {
    // set state.currentFriendId to be `id`
  }

  inputChange = (value, field) => {
    // implement with setState
  }

  render() {
    return (
      <div className='container'>
        <div className='sub-container'>
          <h3>These are my friends:</h3>
          {/* Make it so we get the `No friends! Sad!` h5 if there are no friends */}
          {
            this.state.friends.map(friend => (
              <Friend
                key={friend.id}
                friend={friend}
                deleteFriend={this.deleteFriend}
                setCurrentFriendId={this.setCurrentFriendId}
              />
            ))
          }
        </div>
        <FriendEditor
          form={this.state.form}
          inputChange={this.inputChange}
          addFriend={this.addFriend}
          updateFriend={this.updateFriend}
          isEditing={!!this.state.currentFriendId}
        />
      </div>
    );
  }
}

export default Container;
