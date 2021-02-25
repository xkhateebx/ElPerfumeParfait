import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/aboutus',
    text: 'about us',
  },
  {
    id: 3,
    url: '/products',
    text: 'products',
  },
  {
    id: 4,
    url: '/search',
    text: 'search',
  },
  {
    id: 5,
    url: '/register',
    text: 'login/register',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://github.com/Rahafhosari/ElPerfumeParfait',
    icon: <FaGithub />,
  },
];

