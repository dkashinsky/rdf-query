import { Bindings } from "rdf-js";

export const logBindings = (bindings: Bindings[]) => {
    bindings.forEach((binding) => {
        console.log('binding:', [...binding.values()])
    });
};