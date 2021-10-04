import { lstatSync, readdirSync, readFileSync } from 'fs';

export class Dir {
  constructor(public path: string) {}
  subs() {
    return readdirSync(this.path).map((s) => [this.path, s].join('/'));
  }
  isDir() {
    return lstatSync(this.path).isDirectory();
  }
  isFile() {
    return lstatSync(this.path).isFile();
  }
  subDirs() {
    return this.subs()
      .filter((d) => lstatSync(d).isDirectory())
      .map((d) => new Dir(d));
  }
  recursiveSubDirs(): Dir[] {
    return [
      this,
      ...this.subs()
        .filter((d) => lstatSync(d).isDirectory())
        .map((d) => new Dir(d))
        .flatMap((d) => d.recursiveSubDirs()),
    ];
  }
  files() {
    return this.subs()
      .filter((d) => lstatSync(d).isFile())
      .map((d) => new File(d));
  }
}

export class File {
  constructor(public path: string) {}
  contents() {
    return readFileSync(this.path).toString();
  }

  contains(text: string) {
    return this.contents().includes(text);
  }
}
