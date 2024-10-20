// src/components/DocumentEditor.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const DocumentEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (id) {
      const fetchDocument = async () => {
        const docRef = doc(db, "documents", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setTitle(docSnap.data().title);
          setContent(docSnap.data().content);
        }
      };
      fetchDocument();
    }
  }, [id]);

  const handleSave = async () => {
    const docRef = id ? doc(db, "documents", id) : doc(collection(db, "documents"));
    await setDoc(docRef, { title, content });
    navigate('/');
  };

  return (
    <div>
      <h1>{id ? 'Edit Document' : 'Create Document'}</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Document Title"
      />
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default DocumentEditor;
