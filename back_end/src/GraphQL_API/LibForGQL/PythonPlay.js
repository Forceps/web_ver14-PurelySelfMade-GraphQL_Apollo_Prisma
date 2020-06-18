import { PythonShell } from "python-shell";

let Options = {
  pythonPath: "C:\\Users\\kwesm\\Anaconda3\\python.exe"
};

export default (AbsolutePath, fileName) => {
  PythonShell.run(AbsolutePath, Options, function(err) {
    if (err) {
      throw err;
    }
    if (fileName === undefined || fileName === null || fileName === "") {
      console.log(`✅  python file "something" executed`);
    } else {
      console.log(`✅  python file "${fileName}" executed`);
    }
  });
};
