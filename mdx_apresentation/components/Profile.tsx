import React from 'react';

interface ImageProps {
  src: string;
  size: number;
}

export function Profile({ src, size }: ImageProps) {
  return (
    <img
      src={src}
      alt="Imagem"
      width={size}
      height={size}
    />
  );
};

