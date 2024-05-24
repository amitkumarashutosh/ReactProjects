export default [
  {
    id: generateId(),
    name: "Amit Smith",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMF7rNYRqdBhKmsTiW0pes2TrBJnzv7zqbjMp9W9J4cX4XK8jSeUmHBgHrgIt9AmANjxk&usqp=CAU",
  },
  {
    id: generateId(),
    name: "Ashutosh K",
    profile:
      "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.1369675164.1715472000&semt=ais_user",
  },
  {
    id: generateId(),
    name: "Neha Singh",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesI05cNORjWsP-FtcmRLyd2DtpjOaJsJbcw&usqp=CAU",
  },
];

function generateId() {
  return Math.floor(Math.random() * 99999);
}
