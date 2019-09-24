import "./theyalow.html";
import "./scss/theyalow.scss";

if (typeof fs !== undefined + "") {
  const folder = path.resolve(__dirname, './assets/images/');

  fs.readdirSync(folder, (err, files) => {
    files.forEach(file => {
      require('./assets/images/' + file);
    });
  });
}