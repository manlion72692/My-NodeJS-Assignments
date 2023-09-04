const { writeFile } = require('fs')
const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	const data = await fs.writeFile(fileName, fileContent);
	// dont change function name
}

const myFileReader = async (fileName) => {
	// write code here
    const data = await fs.readFile(fileName, "utf-8");
    console.log(data);
	// dont change function name
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
    const data = await fs.appendFile(fileName, fileContent);
	// dont change function name
}

const myFileDeleter = async (fileName) => {
	// write code here
    const data = await fs.unlink(fileName);
	// dont change function name
}

// myFileWriter("testfile.txt", "Hello");
// myFileReader("testfile.txt");
// myFileUpdater("testfile.txt", " World");
myFileDeleter("testfile.txt");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
