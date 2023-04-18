/* eslint-disable max-len */
import React from 'react';

interface QrViewportSVGProps {
  color: string;
  width?: string;
  height?: string;
}

const QrViewportSVG = ({ color, width = '100%', height = '100%' }: QrViewportSVGProps) => {
  return (
    <svg width={ width } height={ height } viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d='M2.4 12.4138C2.4 12.7452 2.66863 13.0138 3 13.0138C3.33137 13.0138 3.6 12.7452 3.6 12.4138H2.4ZM3 3V2.4C2.66863 2.4 2.4 2.66863 2.4 3H3ZM11.9655 3.6C12.2969 3.6 12.5655 3.33137 12.5655 3C12.5655 2.66863 12.2969 2.4 11.9655 2.4V3.6ZM3.6 12.4138V3H2.4V12.4138H3.6ZM3 3.6H11.9655V2.4H3V3.6Z' fill={ color }/>
      <path d='M19.5862 2.4C19.2548 2.4 18.9862 2.66863 18.9862 3C18.9862 3.33137 19.2548 3.6 19.5862 3.6V2.4ZM29 3H29.6C29.6 2.66863 29.3314 2.4 29 2.4V3ZM28.4 12.4138C28.4 12.7452 28.6686 13.0138 29 13.0138C29.3314 13.0138 29.6 12.7452 29.6 12.4138H28.4ZM19.5862 3.6H29V2.4H19.5862V3.6ZM28.4 3V12.4138H29.6V3H28.4Z' fill={ color }/>
      <path d='M2.4 19.5862C2.4 19.2548 2.66863 18.9862 3 18.9862C3.33137 18.9862 3.6 19.2548 3.6 19.5862H2.4ZM3 29V29.6C2.66863 29.6 2.4 29.3314 2.4 29H3ZM11.9655 28.4C12.2969 28.4 12.5655 28.6686 12.5655 29C12.5655 29.3314 12.2969 29.6 11.9655 29.6V28.4ZM3.6 19.5862V29H2.4V19.5862H3.6ZM3 28.4H11.9655V29.6H3V28.4Z' fill={ color }/>
      <path d='M19.5862 29.6C19.2548 29.6 18.9862 29.3314 18.9862 29C18.9862 28.6686 19.2548 28.4 19.5862 28.4V29.6ZM29 29H29.6C29.6 29.3314 29.3314 29.6 29 29.6V29ZM28.4 19.5862C28.4 19.2548 28.6686 18.9862 29 18.9862C29.3314 18.9862 29.6 19.2548 29.6 19.5862H28.4ZM19.5862 28.4H29V29.6H19.5862V28.4ZM28.4 29V19.5862H29.6V29H28.4Z' fill={ color }/>
    </svg>
  );
};

export default QrViewportSVG;
