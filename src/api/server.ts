import { setupServer } from "msw/node";
import { handlers } from "./mockApi";

const server = setupServer(...handlers);

export { server };
