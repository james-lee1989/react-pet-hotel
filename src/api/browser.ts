import { setupWorker } from "msw/browser";
import { handlers } from "./mockApi";

const worker = setupWorker(...handlers);

export { worker };
