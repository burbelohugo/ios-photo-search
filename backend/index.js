const { createWorker } = require('tesseract.js');

const extractText = async () => {
  const worker = createWorker({
    logger: m => console.log(m)
  });

  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize('https://ios-photo-search.s3.amazonaws.com/test-photos/test.png');
  console.log(text);
  await worker.terminate();
}

extractText()
