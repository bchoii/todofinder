import { File } from './Dir';

let f: File;

beforeEach(async () => {
  f = new File('./src/test/test.txt');
});

describe('construction', () => {
  it('returns a new instance of a File', async () => {
    expect(f).toBeInstanceOf(File);
  });

  it('paths to test.txt', () => {
    expect(f).toEqual({ path: './src/test/test.txt' });
  });

  it('contents is TODO', () => {
    expect(f.contents()).toEqual('TODO');
  });

  it('contains TODO', () => {
    expect(f.contains('TODO')).toBeTruthy();
  });
});
