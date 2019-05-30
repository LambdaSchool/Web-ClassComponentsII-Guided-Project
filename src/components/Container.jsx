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
    // using setState:
    // 1- add a new friend object to state.friends
    // 2- reset the form to its initial state
    const friend = {
      id: uuid(),
      name: this.state.form.nameValue,
      age: this.state.form.ageValue,
      friendly: true,
    };
    this.setState({
      friends: this.state.friends.concat(friend),
      form: initialFormState,
    });
  }

  updateFriend = () => {
    // using setState:
    // 1- update an existing friend (the `state.currentFriendId` tells us which)
    // 2- reset currentFriendId to null
    // 3- reset the form to its initial state
    this.setState({
      friends: this.state.friends.map(fr => {
        if (fr.id === this.state.currentFriendId) {
          fr.name = this.state.form.nameValue;
          fr.age = this.state.form.ageValue;
        }
        return fr;
      }),
      form: initialFormState,
      currentFriendId: null,
    });
  }

  deleteFriend = id => {
    // using setState:
    // 1- delete an existing friend (the `id` tells us which)
    // 2- also set currentFriendId to null
    // 3- reset the form to its initial state
    this.setState({
      friends: this.state.friends.filter(fr => {
        return fr.id !== id;
      }),
      form: initialFormState,
      currentFriendId: null,
    });
  }

  setFriendToBeEdited = id => {
    const friend = this.state.friends.find(fr => fr.id === id);
    // find the friend using the passed `id`
    // using setState:
    // 1- set state.currentFriendId to be `id`
    // 2- populate this.state.form with the name and age of the friend
    this.setState({
      currentFriendId: id,
      form: {
        nameValue: friend.name,
        ageValue: friend.age,
      },
    });
  }

  inputChange = (value, field) => {
    // implement with setState
    this.setState({
      form: {
        ...this.state.form,
        [field]: value,
      },
    });
  }

  markAsEnemy = id => {
    // using setState:
    // add a "friendly" of false to the friend object with the given id
    this.setState({
      friends: this.state.friends.map(fr => {
        if (fr.id === id) {
          fr.friendly = false
        }
        return fr;
      }),
    });
  }

  wipeOutEnemies = () => {
    // using setState:
    // wipe the enemies from the friends array
    this.setState({
      friends: this.state.friends.filter(fr => fr.friendly),
    });
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
