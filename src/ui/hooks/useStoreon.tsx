
import { createContext } from "react";
import { customContext } from 'storeon/react' // or storeon/preact
import { Repistory } from "../../dom/repistery/repistory";


const CustomContext = createContext(Repistory);
export const useStoreon = customContext(CustomContext);

