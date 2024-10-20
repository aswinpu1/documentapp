// src/components/DocumentList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Doculist = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "documents"));
      setDocuments(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchDocuments();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "documents", id));
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Document List
      </Typography>
      <Link to="/create">
        <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
          Create New Document
        </Button>
      </Link>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {documents.map((doc) => (
          <Card key={doc.id} style={{ width: '300px', position: 'relative' }}>
            <CardContent>
              <Typography variant="h6">
                {doc.title}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary">
                Created on: {new Date(doc.createdAt.seconds * 1000).toLocaleDateString()}
              </Typography> */}
            </CardContent>
            <CardActions>
              <IconButton color="primary" component={Link} to={`/edit/${doc.id}`}>
                <EditIcon />
              </IconButton>
              <IconButton color="secondary" onClick={() => handleDelete(doc.id)}>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Doculist;
