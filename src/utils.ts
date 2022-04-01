import { Bindings } from "rdf-js";

export const logBindings = (bindings: Bindings[]) => {
    bindings.forEach((binding) => {
        console.log(binding.get('state')?.value);
        console.log(binding.get('state')?.termType);
        console.log('binding:', [...binding.values()])
    });
};