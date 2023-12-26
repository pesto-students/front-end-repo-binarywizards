import { toBlob, toPng } from "html-to-image";

const filter = (node) => {
  const exclusionClasses = ["IGNORE_THIS_IN_PDF"];
  return !exclusionClasses.some((classname) =>
    node.classList?.contains(classname),
  );
};

const htmlToBlob = async (node) => {
  return toBlob(node, { quality: 0.95, filter: filter, cacheBust: true })
    .then(function (blob) {
      return blob;
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
};

const htmlToPng = async () => {
  var node = document.getElementById("resume-root");
  node.style["width"] = "595px";
  node.style["height"] = "842px";
  toPng(node, {
    quality: 0.95,
    filter: filter,
    cacheBust: true,
  })
    .then(function (dataUrl) {
      var a = document.createElement("a");
      a.href = dataUrl;
      a.download = "resume.png"; // Name the file here
      document.body.appendChild(a);
      a.click();

      // Clean-up
      setTimeout(function () {
        document.body.removeChild(a);
      }, 100); // Timing could vary based on application needs

      // End of download logic
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
};

export { htmlToBlob, htmlToPng };
