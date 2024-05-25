const { getRandomBackgroundImage } = require('./thumbnail-templates/background-images.js');

const renderBody = (post) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  
    const custom_image = getRandomBackgroundImage();
  
    const { title, avatar, full_name, brand_logo } = post;
    return `
      <body style="margin: 0; padding: 0; height: 100vh;">
        <div style="height: 100%; display: flex; justify-content: center; align-items: center;">
          <img src="${custom_image}" style="max-width: 100%; max-height: 100%;" />
        </div>
        <div class="titlediv">
            <h1 class="title">${title}</h1>
        </div>
        <div class="fullnamediv">
            <h1 class="fullname">${full_name}</h1>
        </div>
        <div class="datediv">
            <h1 class="date">${formattedDate}</h1>
        </div>
        <div class="avatardiv">
            <img src="${avatar}" class="avatar" />
        </div>
        <div class="brand_logodiv">
            <img src="${brand_logo}" class="brand_logo" />
        </div>
      </body>
    `;
  };

  module.exports = renderBody