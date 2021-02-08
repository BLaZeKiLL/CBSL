const fs = require('fs/promises');
const path = require('path');

const metadata = `
---
title: Changelog
---
`;

(async () => {
  const changelog = (await fs.readFile(path.join(__dirname, '..', 'CHANGELOG.md'))).toString();
  const changelog_page = metadata.trimStart() + changelog.replace(/(\n#\s)/g, '\n## ');
  await fs.writeFile(path.join(__dirname, 'src', 'pages', 'changelog.md'), changelog_page);
  console.log('Changelog page created');
})();