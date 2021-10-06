import { Dir } from './Dir';

let d: Dir;

beforeEach(async () => {
  d = new Dir('.');
});

describe('construction', () => {
  it('returns a new instance of a Dir', async () => {
    expect(d).toBeInstanceOf(Dir);
  });

  it('includes project root dir', () => {
    expect(d).toEqual({ path: '.' });
  });
});

describe('files', () => {
  it('includes package.json', () => {
    expect(d.files()).toContainEqual({ path: './package.json' });
  });
});
