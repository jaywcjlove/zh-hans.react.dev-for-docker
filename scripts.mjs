import fs from 'node:fs/promises';
import path from 'node:path';

;(async () => {
  try {
    const nextPath = path.resolve('../next.config.js');
    console.log('nextPath', nextPath);
    await fs.rename(nextPath, nextPath.replace('next.config.js', 'config.js'));
    await fs.copyFile('./next.config.js', nextPath);
  } catch (error) {
    console.error(error);
  }
})();