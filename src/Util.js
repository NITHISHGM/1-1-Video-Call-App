export function generateToken(userID, roomID, userName) {
  return fetch(
    `https://choui-prebuilt.herokuapp.com/access_token?userID=${userID}&userName=${userName}&roomID=${roomID}&expired_ts=7200`
  ).then((res) => res.json());
}

export function randomId(len) {
  let result = "";
  if (result) return result;
  var chars = "1234567890abcdefghijklmnopqrstuvwxyz";
  var maxPos = chars.length;
  len = len || 5;
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function randomName() {
  const names = [
    "oliver",
    "jackie",
    "arun",
    "manoj",
    "yuvas",
    "shiva",
    "ramki",
    "sundar",
    "preetha",
    "salai",
    "karthi",
    "jai",
    "aravinth",
  ];
  return names[Math.round(Math.random() * names.length)];
}
