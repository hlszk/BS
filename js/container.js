/*
* Container structures.
*/

// Maximal number of files stored
const maxNumberOfFiles = 16;

// Container structures with block sizes als values
let data = {
    "name": "Container",
    "children": [
        {
            "name": "Superblock", "size": 1
        }, {
            "name": "DMAP",
        }, {
            "name": "FAT", "size": 32
        }, {
            "name": "Root", "size": 16
        }, {
            "name": "Data", "size": 32
        }]
};

// After initial drawn we need new data
// Forcing object copy by value not reference
var newData = JSON.parse(JSON.stringify(data));

/*
* DMAP
*/

// Allocating free space in DMAP als "F"
// nesting first element
data.children[1].children = [{"name": "F", "size": 1}];
// nesting (n > 1) elements
for (let i = 1; i < 32; i++) {
    data.children[1].children[i] = {"name": "F", "size": 1};
}

// Get next free blocks
function getFreeBlock() {

}

// Set free ("F") or allocated ("A") state
function setBlock(state) {

}


/*
* FAT
*/

// Read next address in table
function readAddress() {

}

// Write next address to table
// Addresses are randomized for better understanding the need of an allocation table
function writeAddress() {

}

/*
* ROOT DIRECTORY
*/

/*
* Get inode data for file
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function getFile(num) {

}

/*
* Write inode data for file
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function writeFile(num) {
    if (num === 0) {
        newData.children[3].children = [{"name": "File " + i, "size": 1}];
    }
}

/*
* Delete file from root directory
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function deleteFile(num) {

}

/*
* DATA
*/

// Write in data sector
function writeData(address) {

}

// Delete data
function deleteData(address) {

}