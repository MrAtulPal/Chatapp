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

export { transformImg, fileFormate };
