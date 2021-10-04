import { join } from 'path';
import { Dir, File } from './Dir';

const processfile = (file: File) => {
  // console.log('processfile', file);
  if (file.contents().includes('TODO')) {
    console.log(file.path);
  }
};

const processdir = (dir: Dir) => {
  const files = dir.files();
  for (const file of files) {
    processfile(file);
  }

  const subdirs = dir.subDirs();
  for (const subdir of subdirs) {
    processdir(subdir);
  }
};

processdir(new Dir(join(__dirname, '../..')));
