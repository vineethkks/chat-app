import React, { useState, useEffect } from 'react';
import { Container, SubmitButton } from './styles';
import { useNavigate } from 'react-router-dom';
import loader from '../assets/loader.gif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { setAvatarRoute } from '../utils/APIRoutes';

function SetAvatar() {
  const api = 'https://api.multiavatar.com/45678945';
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error('Please select an avatar', toastOptions);
    } else {
      const user = await JSON.parse(localStorage.getItem('chat-app-user'));
      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar],
      });
      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem('chat-app-user', JSON.stringify(user));
        navigate('/');
      } else {
        toast.error('Error setting avatar. Please try again', toastOptions);
      }
    }
  };

  function getImageDataURL(svgXml) {
    return (
      'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgXml)))
    );
  }

  useEffect(() => {
    async function fetchData() {
      const data = [];
      for (let i = 0; i < 4; i++) {
        const image = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`,
        );
        data.push(getImageDataURL(image.data));
      }
      setAvatars(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Container>
          <img src={loader} alt='loading...' className='loader' />
        </Container>
      ) : (
        <>
          <Container>
            <div className='title-container'>
              <h1>Pick an avatar as your profile picture</h1>
            </div>
            <div className='avatars'>
              {avatars.map((avatar, index) => {
                return (
                  <div
                    className={`avatar ${
                      selectedAvatar === index ? 'selected' : ''
                    }`}
                    key={avatar}
                  >
                    <img
                      src={avatar}
                      alt='avatar'
                      onClick={() => setSelectedAvatar(index)}
                    />
                  </div>
                );
              })}
            </div>
            <SubmitButton className='submit-btn' onClick={setProfilePicture}>
              Set as Profile Picture
            </SubmitButton>
          </Container>
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default SetAvatar;
