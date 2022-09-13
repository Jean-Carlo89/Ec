import dotenv from "dotenv";

//const envFile = process.env.NODE_ENV === "test" ? ".env.test" : process.env.NODE_ENV === "staging" ? ".env.staging" : ".env.production";
let envFile: string;
if (process.env.NODE_ENV === "test") {
  envFile = ".env.test";
}

const config = () => {
  dotenv.config({
    path: envFile,
  });
};

config();
