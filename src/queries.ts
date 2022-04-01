import type { QueryEngine } from "@comunica/query-sparql-rdfjs";
import type { Store } from "n3";

export const queryStateBindings = async (queryEngine: QueryEngine, store: Store) => {
    const stream = await queryEngine.queryBindings(
        `
        PREFIX class: <URN:classes:>
        SELECT ?state  
        WHERE {
            ?state a class:state.
        }`, {
        sources: [store],
    });
    return await stream.toArray();
};

export const queryStateQuads = async (queryEngine: QueryEngine, store: Store) => {
    const stream = await queryEngine.queryQuads(
        `
        PREFIX class: <URN:classes:>
        CONSTRUCT WHERE {
            ?state a class:state.
        }`, {
        sources: [store],
    });
    return await stream.toArray();
};
