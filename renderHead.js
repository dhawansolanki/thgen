const renderHead = () => {
    return `
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"></script>
        <script src="minified/DrawSVGPlugin.min.js"></script>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@1,300&family=Playfair+Display:ital,wght@1,600&family=Poppins:wght@300&display=swap');
          .brand_logodiv {
            position: absolute;
            top: 2%;
            left: 83%;
          }
          .titlediv {
            position: absolute;
            right: 7%;
            top: 25%;
            height: auto;
            width: 30%;
            z-index: 999;
          }
          .fullnamediv {
            position: absolute;
            right: 58%;
            top: 80%;
            height: auto;
            width: auto;
            z-index: 999;
          }
          .datediv {
            position: absolute;
            right: -12%;
            top: 90%;
            height: auto;
            width: 350px;
            text-align: center;
            z-index: 999;
          }
          .title {
            color: #ffffff;
            font-size: 45px;
            font-family: 'Alfa Slab One', cursive;
            width: auto;
          }
          .fullname {
            color: #ffffff;
            font-size: 32px;
            font-family: 'Alfa Slab One', cursive;
          }
          .date {
            color: #ffffff;
            font-size: 30px;
            font-family: 'Alfa Slab One', cursive;
          }
          .avatardiv {
            position: absolute;
            top: 14.5%;
            left: 5.5%;
          }
          .avatar {
            border-radius: 100%;
            height: 400px;
            width: 400px;
          }
          .brand_logo {
            height: 40px;
            width: 120px;
          }
        </style>
      </head>
    `;
  };
  
  module.exports = renderHead;
  