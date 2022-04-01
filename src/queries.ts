import { QueryEngine } from "@comunica/query-sparql-rdfjs";
import { Store } from "n3";

export const queryStates = async (queryEngine: QueryEngine, store: Store) => {
    const stream = await queryEngine.queryBindings(
        `
        PREFIX class: <URN:classes>
        SELECT ?state  
        WHERE {
            ?state a class:state.
        }`, {
        sources: [store],
    });
    return await stream.toArray();
};
