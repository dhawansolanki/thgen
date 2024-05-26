
# thgen : Thumbnail Generator
Author : [Dhawan Solanki](https://github.com/dhawansolanki)

This library generates thumbnail images based on provided post data using Puppeteer. The images are stored locally in a specified directory.


## Features

- Generates thumbnail images with random background images.
- Customizable title, avatar, full name, and brand logo.
- Stores the generated images locally.

## Installation

```
npm i thgen
```

## Usage

To use the thumbnail generation functionality, you can import the generateThumbnail function and call it with the post data as an argument:


```
const { generateThumbnail } = require('thgen');

const postData = {
  title: 'Thumbnail Generator by Dhawan Solanki',
  avatar: 'https://example.com/avatar.jpg',
  full_name: 'Dhawan Solanki',
  brand_logo : 'https://example.com/brand_logo.jpg'
};

try {
  const { fileName, filePath } = await generateThumbnail(postData);
  console.log('Thumbnail generated:', fileName, filePath);
} catch (error) {
  console.error('Error generating thumbnail:', error);
}

```

## Result

![image](https://github.com/dhawansolanki/thgen/assets/91565429/a99a5da1-52f0-478b-a4b7-25de55454fd5)


## Future Improvements

- Add support for customizing the thumbnail size and quality

- Implement caching to avoid unnecessary re-rendering of the same content

- Provide additional options for the generated thumbnail, such as adding a border or overlay

## Contribution

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the project's repository.
