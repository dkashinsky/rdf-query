import { readFileSync } from 'fs';
import { resolve } from 'path';
import { Parser } from 'n3';

const kbFilePath = resolve(__dirname, '../assets/kb.n3');
const kb = readFileSync(kbFilePath, { encoding: 'utf8' });
const parser = new Parser({ format: 'text/n3' });
const quads = parser.parse(kb);

console.log(`knowledge base contains ${quads.length} quads`);