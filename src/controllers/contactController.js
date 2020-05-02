const { v4: uuidv4 } = require('uuid');
const pool = require('../config/db');

const allContacts = async (req, res) => {
}

const createContact = async (req, res) => {
  const { first_name, last_name, email, phone } = req.body;
  const query = 'INSERT INTO contacts (first_name, last_name, email, phone) VALUES ($1, $2, $3, $4)';
  const { rows } = await pool.query(
    query,
    [first_name, last_name, email, phone]
  );
  res.send({
    status: 200,
    message: 'Contact has been added',
    data: { 
      first_name,
      last_name,
      email,
    phone,
  }});
}

const getContact = async (req, res) => {
}

const updateContact = async (req, res) => {
}

const deleteContact = async (req, res) => {
}

module.exports = {
  allContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
}