import { join } from 'path';
import { Dir, File } from './Dir';

const processfile = (file: File) => {
  // console.log('processfile', file);
  if (file.contains('TODO')) {
    console.log(file.path);
  }
};

const process = (dir: Dir) => {
  const subdirs = dir.recursiveSubDirs();
  // console.log(subdirs);
  const files = subdirs.flatMap((d) => d.files());
  // console.log(files);
  const filtered = files.filter((f) => f.contains('TODO'));
  console.log(filtered.map((f) => f.path));
};

process(new Dir(join(__dirname, '../..')));
