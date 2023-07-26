import { createContext, useContext } from "react";

const formContext = createContext();

function useFormContext() {
    return useContext(formContext)
}

export {formContext, useFormContext}