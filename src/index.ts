import { readFileSync } from 'fs';
import { resolve } from 'path';
import { Parser, Store } from 'n3';
import { QueryEngine } from '@comunica/query-sparql-rdfjs';
import { queryStateBindings, queryStateQuads } from './queries';
import { logBindings } from './utils';

const kbFilePath = resolve(__dirname, '../assets/kb.n3');
const kb = readFileSync(kbFilePath, { encoding: 'utf8' });
const parser = new Parser({ format: 'text/n3' });
const store = new Store(parser.parse(kb));
const queryEngine = new QueryEngine();

console.log(`knowledge base contains ${store.size} quads`);

queryStateBindings(queryEngine, store)
    .then((states) => logBindings(states))
    .catch((e) => console.log(e));

queryStateQuads(queryEngine, store)
    .then((states) => console.log(states))
    .catch((e) => console.log(e));
