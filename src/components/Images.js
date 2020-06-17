import React from 'react';
import { BlocksControls, InlineImage } from 'react-tinacms-inline';
import '../styles/images.css';

export function Images({ index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: 0 }}
      insetControls={true}
    >
      <div className="wrapper">
        <div className="image-diptych">
          <InlineImage
            name="left.src"
            parse={(filename) => `${filename}`}
            uploadDir={() => '/'}
            previewSrc={(formValues) => `${formValues.blocks[index].left.src}`}
            focusRing={false}
          />
          <InlineImage
            name="right.src"
            parse={(filename) => `/${filename}`}
            uploadDir={() => '/'}
            previewSrc={(formValues) => `${formValues.blocks[index].right.src}`}
            focusRing={false}
          />
        </div>
      </div>
    </BlocksControls>
  );
}

export const images_template = {
  label: 'Image Diptych',
  defaultItem: {
    _template: 'images',
    left: {
      src: '/ivan-bandura-unsplash-square.jpg',
      alt: 'Some alt text',
    },
    right: {
      src: '/martin-sanchez-unsplash-square.jpg',
      alt: 'Some alt text',
    },
  },
  fields: [
    {
      name: 'left.src',
      label: 'Left-Hand Image',
      component: 'image',
      parse: (filename) => `/${filename}`,
      uploadDir: () => '/',
      previewSrc: () => '/ivan-bandura-unsplash-square.jpg',
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
      parse: (filename) => `/${filename}`,
      uploadDir: () => '/',
      previewSrc: () => '/martin-sanchez-unsplash-square.jpg',
      focusRing: false,
    },
    {
      name: 'right.alt',
      label: 'Right-Hand Image Alt Text',
      component: 'text',
    },
  ],
};
