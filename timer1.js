var args = process.argv.splice(2);

for (let x of args) {
  if (x >= 0) {
  setTimeout(() => {process.stdout.write('\x07')}, x*1000);
  }
}
