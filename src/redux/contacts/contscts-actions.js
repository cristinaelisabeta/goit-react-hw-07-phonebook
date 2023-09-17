import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
// import { getContacts, postContact, deleteContact } from 'services/api';
import axios from 'axios';
//-------------------------------------------------------------//

axios.defaults.baseURL = 'https://62f3b001a84d8c96812999e0.mockapi.io';

export const getUsers = createAsyncThunk('contacts/get', async () => {
  // return await getContacts();
  try {
    const { data } = await axios.get('/contacts');

    return data;
  } catch (error) {
    return error;
  }
});

export const addUser = createAsyncThunk('contacts/add', async contact => {
  // const response = await postContact(contact);
  // return response.data;
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    return error;
  }
});

export const deleteUser = createAsyncThunk('contacts/delete', async id => {
  // const response = await deleteContact(id);
  // return response.data.id;
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    return error;
  }
});

export const filterUser = createAction('contacts/filter');
