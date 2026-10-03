import React, { useState } from 'react';

interface PortraitAvatarProps {
  onImageChange?: (imageUrl: string) => void;
}

export const PortraitAvatar: React.FC<PortraitAvatarProps> = ({ onImageChange }) => {
  const [customImage, setCustomImage] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const url = event.target.result as string;
          setCustomImage(url);
          onImageChange?.(url);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-full h-full rounded-full overflow-hidden select-none group">
      {customImage ? (
        <img
          src={customImage}
          alt="Jishnuprem M S"
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        /* High-fidelity stylized SVG artwork matching the reference image photo:
           Handsome young Indian CS engineer, short dark hair, well-trimmed beard/moustache,
           crisp white collared shirt, soft neutral textured studio backdrop */
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full object-cover rounded-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Background Studio Wall Texture */}
            <radialGradient id="studioWall" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#A39D95" />
              <stop offset="60%" stopColor="#7B756E" />
              <stop offset="100%" stopColor="#554F48" />
            </radialGradient>

            {/* Skin Tone Gradients */}
            <linearGradient id="skinBase" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E0AC84" />
              <stop offset="60%" stopColor="#C99066" />
              <stop offset="100%" stopColor="#9C6B46" />
            </linearGradient>

            <radialGradient id="faceHighlight" cx="48%" cy="40%" r="45%">
              <stop offset="0%" stopColor="#EBC09B" />
              <stop offset="70%" stopColor="#D49E77" />
              <stop offset="100%" stopColor="#B07C54" />
            </radialGradient>

            {/* Shirt Gradient */}
            <linearGradient id="whiteShirt" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F4F4F5" />
              <stop offset="100%" stopColor="#D4D4D8" />
            </linearGradient>

            {/* Hair Gradient */}
            <linearGradient id="darkHair" x1="0%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#2E2824" />
              <stop offset="50%" stopColor="#171412" />
              <stop offset="100%" stopColor="#0B0908" />
            </linearGradient>

            {/* Rim Light Mask */}
            <linearGradient id="rimLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD166" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* 1. Backdrop */}
          <circle cx="200" cy="200" r="200" fill="url(#studioWall)" />
          
          {/* Subtle noise speckles on studio wall */}
          <circle cx="90" cy="110" r="1.5" fill="#FFF" opacity="0.15" />
          <circle cx="310" cy="140" r="1.5" fill="#FFF" opacity="0.15" />
          <circle cx="120" cy="260" r="2" fill="#000" opacity="0.1" />
          <circle cx="280" cy="290" r="2" fill="#000" opacity="0.1" />

          {/* 2. Neck & Trapezius */}
          <path
            d="M165 240 L160 310 L240 310 L235 240 Z"
            fill="#B07C54"
          />
          {/* Neck Shadow under chin */}
          <path
            d="M165 240 C 185 260, 215 260, 235 240 C 220 270, 180 270, 165 240 Z"
            fill="#804E2D"
            opacity="0.8"
          />

          {/* 3. Crisp White Buttoned Collared Shirt */}
          {/* Main Body */}
          <path
            d="M80 400 L120 310 L280 310 L320 400 Z"
            fill="url(#whiteShirt)"
          />
          {/* Shirt Placket (Center strip) */}
          <path
            d="M192 315 L192 400 L208 400 L208 315 Z"
            fill="#E4E4E7"
          />
          {/* Buttons */}
          <circle cx="200" cy="345" r="4.5" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />
          <circle cx="200" cy="385" r="4.5" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />

          {/* Left Collar Flap */}
          <path
            d="M140 305 L200 325 L160 365 L125 320 Z"
            fill="#FFFFFF"
            filter="drop-shadow(0 3px 4px rgba(0,0,0,0.15))"
          />
          {/* Right Collar Flap */}
          <path
            d="M260 305 L200 325 L240 365 L275 320 Z"
            fill="#F4F4F5"
            filter="drop-shadow(0 3px 4px rgba(0,0,0,0.15))"
          />

          {/* 4. Head & Face Contours */}
          <path
            d="M140 170 C 138 210, 155 260, 200 262 C 245 260, 262 210, 260 170 C 260 115, 230 110, 200 110 C 170 110, 140 115, 140 170 Z"
            fill="url(#faceHighlight)"
          />

          {/* Ears */}
          {/* Left Ear */}
          <path d="M136 170 C 130 170, 130 200, 138 205 Z" fill="#C99066" />
          {/* Right Ear */}
          <path d="M264 170 C 270 170, 270 200, 262 205 Z" fill="#C99066" />

          {/* 5. Facial Features matching reference */}
          {/* Eyebrows: Defined and natural */}
          <path
            d="M152 162 Q 170 156, 185 163 Q 170 153, 152 162 Z"
            fill="#171412"
          />
          <path
            d="M215 163 Q 230 156, 248 162 Q 230 153, 215 163 Z"
            fill="#171412"
          />

          {/* Almond Shaped Dark Eyes */}
          {/* Left Eye */}
          <ellipse cx="170" cy="173" rx="10" ry="6" fill="#FFFFFF" />
          <circle cx="171" cy="173" r="4.8" fill="#1C140E" />
          <circle cx="172.5" cy="171.5" r="1.5" fill="#FFFFFF" />
          <path d="M158 171 Q 170 167, 182 171" stroke="#171412" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Right Eye */}
          <ellipse cx="230" cy="173" rx="10" ry="6" fill="#FFFFFF" />
          <circle cx="229" cy="173" r="4.8" fill="#1C140E" />
          <circle cx="230.5" cy="171.5" r="1.5" fill="#FFFFFF" />
          <path d="M218 171 Q 230 167, 242 171" stroke="#171412" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Nose */}
          <path
            d="M197 168 L195 204 L190 209 Q 200 213, 210 209 L205 204"
            fill="none"
            stroke="#9C6B46"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <ellipse cx="193" cy="208" rx="2.5" ry="1.5" fill="#7C4E2D" />
          <ellipse cx="207" cy="208" rx="2.5" ry="1.5" fill="#7C4E2D" />

          {/* Mustache - Neat, light trimmed (as in photo) */}
          <path
            d="M184 218 C 193 216, 198 217, 200 219 C 202 217, 207 216, 216 218 C 210 223, 190 223, 184 218 Z"
            fill="#1E1713"
          />

          {/* Lips */}
          <path
            d="M185 228 Q 200 226, 215 228"
            stroke="#9E5D42"
            strokeWidth="3.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M188 229 Q 200 236, 212 229"
            fill="#B86F52"
          />

          {/* Beard / Goatee - Trimmed chin facial hair */}
          <path
            d="M192 243 Q 200 241, 208 243 Q 200 252, 192 243 Z"
            fill="#1E1713"
            opacity="0.85"
          />
          {/* Subtle jawline shadow/stubble */}
          <path
            d="M150 200 Q 155 245, 190 258 Q 200 260, 210 258 Q 245 245, 250 200 Q 242 248, 200 256 Q 158 248, 150 200 Z"
            fill="#1E1713"
            opacity="0.25"
          />

          {/* 6. Hair - Styled short dark haircut matching the reference */}
          <path
            d="M136 150 C 132 105, 160 82, 200 80 C 240 82, 268 105, 264 150 C 258 130, 240 120, 200 122 C 160 120, 142 130, 136 150 Z"
            fill="url(#darkHair)"
          />
          {/* Hair Volume & Strands on top and forehead fringe */}
          <path
            d="M140 135 C 150 115, 175 108, 195 110 C 220 112, 245 116, 260 135 C 250 128, 230 124, 200 125 C 170 126, 150 130, 140 135 Z"
            fill="#38302B"
          />
          {/* Fringe Tufts */}
          <path
            d="M155 125 C 165 140, 175 138, 185 130 C 195 142, 210 138, 220 128 C 235 140, 245 135, 250 126"
            stroke="#171412"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />

          {/* 7. Golden Rim Light on right side (Matching golden illumination in reference) */}
          <path
            d="M260 100 C 285 140, 285 240, 255 290"
            stroke="#F59E0B"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.45"
            filter="blur(3px)"
          />
        </svg>
      )}

      {/* Floating Photo Customizer Pill on hover */}
      <label className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 cursor-pointer">
        <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-black/80 hover:bg-black text-amber-300 border border-amber-500/50 shadow-lg backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {customImage ? 'Change Photo' : 'Upload Your Photo'}
        </span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </label>
    </div>
  );
};
