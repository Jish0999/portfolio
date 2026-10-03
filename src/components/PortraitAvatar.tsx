import React from 'react';

const PortraitAvatar: React.FC = () => {
  return (
    <div className="w-full h-full rounded-full overflow-hidden">
      <img
        src="/images/profile.jpg"
        alt="Profile portrait"
        className="w-full h-full object-cover object-[50%_35%]"
      />
    </div>
  );
};

export default PortraitAvatar;