import React from 'react';

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com' },
  { name: 'Instagram', url: 'https://www.instagram.com' },
  { name: 'Twitter', url: 'https://www.twitter.com' },
  { name: 'YouTube', url: 'https://www.youtube.com' },
];

const SocialLinks = () => {
  return (
    <div>
      
      <ul className='text-xl cursor-pointer mt-10'>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
