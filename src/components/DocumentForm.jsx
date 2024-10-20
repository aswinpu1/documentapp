// src/components/DocumentForm.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const DocumentForm = ({ handleSave, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');

  const handleSubmit = () => {
    handleSave({ title, content });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom>
        {initialData ? "Edit Document" : "Create New Document"}
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <ReactQuill value={content} onChange={setContent} style={{ marginBottom: '20px', height: '200px' }} />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginRight: '10px' }}
        >
          Save
        </Button>
        <Button variant="outlined" color="secondary" component={Link} to="/">
          Cancel
        </Button>
      </form>
    </Container>
  );
};

export default DocumentForm;
