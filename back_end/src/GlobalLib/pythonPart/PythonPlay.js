import { PythonShell } from "python-shell";

let Options = {
  pythonPath: "C:\\Users\\kwesm\\Anaconda3\\python.exe",
};

export default (AbsolutePath, fileName) => {
  PythonShell.run(AbsolutePath, Options, (e) => {
    if (e) throw e;
    fileName === undefined || fileName === null || fileName === ""
      ? console.log(`✅  python file "something" executed`)
      : console.log(`✅  python file "${fileName}" executed`);
  });
};
