const bgList = [
  "https://ap-south-1.graphassets.com/clwm3yglx0c7w08pi7octds63/clwma4eoe0r6j07plfvji3qp0",
  "https://ap-south-1.graphassets.com/clwm3yglx0c7w08pi7octds63/clwma4ejs0rj007od89ld9pfy",
  "https://ap-south-1.graphassets.com/clwm3yglx0c7w08pi7octds63/clwma4eij0riw07odnca3ove5",
  "https://ap-south-1.graphassets.com/clwm3yglx0c7w08pi7octds63/clwma4ehj0r6e07plv76elghz",
  "https://ap-south-1.graphassets.com/clwm3yglx0c7w08pi7octds63/clwma4egt0riq07odeh3relr1",
  "https://ap-south-1.graphassets.com/clwm3yglx0c7w08pi7octds63/clwma4edt0r6907plhgg26sd3",
  "https://ap-south-1.graphassets.com/clwm3yglx0c7w08pi7octds63/clwma4edy0ril07odkniv3qjn"
];

const getRandomBackgroundImage = () => {
  const randomBgIndex = Math.floor(Math.random() * bgList.length);
  return bgList[randomBgIndex];
};

module. exports = {
  getRandomBackgroundImage
}