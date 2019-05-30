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
    { id: uuid(), name: 'Delba', age: '25', friendly: true },
    { id: uuid(), name: 'Maxime', age: '27', friendly: true },
    { id: uuid(), name: 'Giacomo', age: '29', friendly: true },
  ],
  currentFriendId: null,
  form: initialFormState,
};

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  addFriend = () => {
    this.setState(state => {
      const newFriend = {
        id: uuid(),
        name: this.state.form.nameValue,
        age: this.state.form.ageValue,
        friendly: true,
      };
      return {
        friends: state.friends.concat(newFriend),
        form: initialFormState,
      };
    });
  }

  updateFriend = () => {
    // using setState:
    // 1- update an existing friend (the `state.currentFriendId` tells us which)
    // 2- reset currentFriendId to null
    // 3- reset the form to its initial state
    this.setState(state => ({
      friends: state.friends.map(friend => {
        if (friend.id === state.currentFriendId) {
          friend.name = state.form.nameValue;
          friend.age = state.form.ageValue;
        }
        return friend;
      }),
      form: initialFormState,
      currentFriendId: null,
    }));
  }

  deleteFriend = id => {
    // using setState:
    // 1- delete an existing friend (the `id` tells us which)
    // 2- also set currentFriendId to null
    // 3- reset the form to its initial state
    this.setState(st => ({
      friends: st.friends.filter(fr => fr.id !== id),
      form: initialFormState,
      currentFriendId: null,
    }));
  }

  setFriendToBeEdited = id => {
    // find the friend using the passed `id`
    // using setState:
    // 1- set state.currentFriendId to be `id`
    // 2- populate this.state.form with the name and age of the friend
    const friendToEdit = this.state.friends.find(friend => friend.id === id);

    this.setState({
      currentFriendId: id,
      form: {
        nameValue: friendToEdit.name,
        ageValue: friendToEdit.age,
      },
    });
  }

  inputChange = (value, field) => {
    // implement with setState
  }

  markAsEnemy = id => {
    // using setState:
    // add a "friendly" of false to the friend object with the given id
  }

  wipeOutEnemies = () => {
    // using setState:
    // wipe the enemies from the friends array
  }

  render() {
    return (
      <div className='container'>
        <div className='sub-container'>
          <h3>Friends List:</h3>
          {/* Make it so we get the `No friends! Sad!` h5 if there are no friends */}
          {
            this.state.friends.map(friend => (
              <Friend
                key={friend.id}
                friend={friend}
                deleteFriend={this.deleteFriend}
                markAsEnemy={this.markAsEnemy}
                setFriendToBeEdited={this.setFriendToBeEdited}
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
        <button className='alert' onClick={this.wipeOutEnemies}>Wipe Out All Enemies</button>
      </div>
    );
  }
}
