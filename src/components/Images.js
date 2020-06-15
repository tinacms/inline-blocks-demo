import React from 'react';
import { BlocksControls, InlineImage } from 'react-tinacms-inline';
import imageLeft from '../assets/ivan-bandura-unsplash.jpg';
import imageRight from '../assets/martin-sanchez-unsplash.jpg';
import '../styles/images.css';

export function Images({ index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: 0 }}
      insetControls={true}
    >
      <div className="image-diptych">
        <InlineImage
          name="left.src"
          parse={(filename) => `/assets/${filename}`}
          uploadDir={() => '/assets/'}
          previewSrc={() => imageLeft}
          focusRing={false}
        />
        <InlineImage
          name="right.src"
          parse={(filename) => `/assets/${filename}`}
          uploadDir={() => '/assets/'}
          previewSrc={() => imageRight}
          focusRing={false}
        />
      </div>
    </BlocksControls>
  );
}

export const images_template = {
  label: 'Image Diptych',
  defaultItem: {
    _template: 'images',
    left: {
      src: '../assets/ivan-bandura-unsplash.jpg',
      alt: 'Some alt text',
    },
    right: {
      src: '../assets/martin-sanchez-unsplash.jpg',
      alt: 'Some alt text',
    },
  },
  fields: [
    {
      name: 'left.src',
      label: 'Left-Hand Image',
      component: 'image',
      parse: (filename) => `/assets/${filename}`,
      uploadDir: () => '/assets/',
      previewSrc: () => imageLeft,
      focusRing: false,
    },
    {
      name: 'left.alt',
      label: 'Left-Hand Image Alt Text',
      component: 'text',
    },
    {
      name: 'right.src',
      label: 'Right-Hand Image',
      component: 'image',
      parse: (filename) => `/assets/${filename}`,
      uploadDir: () => '/assets/',
      previewSrc: () => imageRight,
      focusRing: false,
    },
    {
      name: 'right.alt',
      label: 'Right-Hand Image Alt Text',
      component: 'text',
    },
  ],
};
