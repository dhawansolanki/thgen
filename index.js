const { v4 } = require('uuid');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const renderHead = require('./renderHead');
const renderBody = require('./renderBody');

const getImageHtml = (post) => {
  return `
    <html lang="en">
      ${renderHead()}
      ${renderBody(post)}
    </html>
  `;
};

const createDirectory = async (dirPath) => {
  try {
    await fs.promises.mkdir(dirPath, { recursive: true });
  } catch (error) {
    console.error('Error creating directory:', error);
  }
};

const createImage = async (post) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    const fileName = `${v4()}.png`;
    const dirPath = path.join(__dirname, '..', 'thumbnails');
    await createDirectory(dirPath);

    const filePath = path.join(dirPath, fileName);

    await page.setContent(getImageHtml(post));

    const content = await page.$('body');
    await content.screenshot({ path: filePath, omitBackground: false });

    return { fileName, filePath };
  } catch (error) {
    console.error(error);
    return '';
  } finally {
    await browser.close();
  }
};


const validatePostData = (data) => {
  const errors = {};

  if (!data['title'] || data['title'] === '') {
    errors['title'] = 'Title is required!';
  }

  if (!data['avatar'] || data['avatar'] === '') {
    errors['avatar'] = 'Avatar is required!';
  }

  if (!data['full_name'] || data['full_name'] === '') {
    errors['full_name'] = 'Full name is required!';
  }

  return errors;
};

const generateThumbnail = async (postData) => {
  const errors = validatePostData(postData);

  if (Object.keys(errors).length > 0) {
    throw new Error('Validation failed');
  }

  return await createImage(postData);
};

module.exports = {
  generateThumbnail
};
