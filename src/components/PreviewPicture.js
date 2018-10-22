import React from 'react';

const PreviewPicture = (props) => {
  const { picture, pictureUrl } = props;

  return (
      <img className="img-fluid mb-2 mt-2 profile-preview-img" src={pictureUrl? pictureUrl :"https://firebasestorage.googleapis.com/v0/b/tuition-jugard-1cba8.appspot.com/o/profile%2Fuser.jpg?alt=media&token=5bc1ee82-abca-42af-b5f8-9318d5f214ed"}/>
);
};

export default PreviewPicture;
