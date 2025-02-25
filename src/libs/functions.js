export const handleLink = (id) => {
  const element = document.querySelector("#" + id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }
};
