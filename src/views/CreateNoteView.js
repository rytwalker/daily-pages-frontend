import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import NoteForm from '../components/NoteForm';
import Timer from '../components/Timer';

class CreateNoteView extends Component {
  state = {
    note: {
      title: '',
      body: ''
    }
  };

  addNewNote = note => {
    const redirect = () => this.props.history.push('/');
    this.props.addNote(note, redirect);
  };

  render() {
    return (
      <div className="View">
        <Timer />
        <h2>Create New Note</h2>
        <NoteForm addNewNote={this.addNewNote} />
      </div>
    );
  }
}

export default connect(
  null,
  { addNote }
)(CreateNoteView);
