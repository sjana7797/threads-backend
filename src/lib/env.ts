import { cleanEnv, num } from "envalid";

const env = cleanEnv(process.env, {
  PORT: num({ default: 5000 }),
});

export { env };
