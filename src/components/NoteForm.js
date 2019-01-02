import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';

class NoteForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: ''
    };
  }

  componentDidMount() {
    if (this.props.note) {
      const { title, content } = this.props.note;
      this.setState({ title, content });
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    const { title, content } = this.state;
    e.preventDefault();
    if (this.props.addNewNote) {
      this.props.addNewNote({ title, content });
    } else if (this.props.updateNote) {
      this.props.updateNote({ title, content });
    }
  };

  render() {
    const { title, content } = this.state;
    return (
      <StyledForm onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="Note Title"
          onChange={this.handleInputChange}
          name="title"
          value={title}
        />

        <textarea
          className="body-input"
          type="text"
          placeholder="Note Content"
          onChange={this.handleInputChange}
          name="content"
          value={content}
        />

        <Button>Save</Button>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input,
  textarea {
    border: none;
    border-radius: 5px;
    padding: 1rem 1.5rem;
    margin-bottom: 2rem;
    color: #2f3640;
    background: #f5f6fa;
    outline: none;
    letter-spacing: 1px;
  }
  input {
    font-size: 2rem;
  }
  textarea {
    resize: none;
    font-size: inherit;
  }
  .body-input {
    height: 50vh;
  }
`;

export default NoteForm;
