import moment from "moment";

const fileFormate = (url = "") => {
  const fileExe = url.split(".").pop();
  if (
    fileExe === "jpg" ||
    fileExe === "png" ||
    fileExe === "jpeg" ||
    fileExe === "gif" ||
    fileExe === "webp"
  )
    return "image";

  if (
    fileExe === "mp4" ||
    fileExe === "mkv" ||
    fileExe === "avi" ||
    fileExe === "mov"
  )
    return "video";

  if (fileExe === "mp3" || fileExe === "wav" || fileExe === "ogg")
    return "audio";
  return "file";
};

const transformImg = (url = "", width = 100) => {
  return url;
};

const getLastSevenDays = () => {
  const currentDate = moment();
  const lastSevenDays = [];
  for (let i = 0; i < 7; i++) {
    const date = moment(currentDate).subtract(i, "days");
    lastSevenDays.push(date.format("dddd"));
  }

  return lastSevenDays;
};

export { transformImg, fileFormate, getLastSevenDays };
