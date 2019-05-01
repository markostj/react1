import React from 'react';

export const Id = ({ id, updateShared, shared }) => (
  <>
    <p>{id}.</p>
    <button value={id} onClick={updateShared}>
      klikni me
    </button>
    <p>{shared}</p>
  </>
);
