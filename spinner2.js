let timer = 100;
const spinner = ['|','/','-','\\','|','/','-','\\','|','\n'];
for (let line of spinner) {
  setTimeout(() => {process.stdout.write('\r'+ line)}, timer);
  timer += 200;
};