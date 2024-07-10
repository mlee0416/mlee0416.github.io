export const capitalizeFirstLetter = (string: string | undefined) => {
  if (typeof string === "string") {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
};
