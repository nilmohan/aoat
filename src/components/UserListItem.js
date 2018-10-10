import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({ id, name, mobileNo }) => (
  <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{mobileNo}</td>
  </tr>
);

export default UserListItem;
