/*
* Container structures.
*/

// Maximal number of files stored
const maxNumberOfFiles = 16;

// Number of files open
var numberOfOpenFiles = 0;

// Object with container structures and their block size
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

/*
* ********************
* DMAP
*/

/*
* Allocating free space in DMAP als "F"
* data.children[1].children is "DMAP"
*
* */

// Nesting first element into container object
data.children[1].children = [{"name": "F", "size": 1}];
// Nesting (n > 1) element into container object
for (let i = 1; i < 32; i++) {
    data.children[1].children[i] = {"name": "F", "size": 1};
}

getFreeBlock();

// Get next free block
function getFreeBlock() {

    // Iterate all DMAP entries
    for (let block in data.children[1].children)
        if (data.children[1].children.hasOwnProperty(block) &&
            data.children[1].children[block].name === "F") {
             return block;
        }
}

// TODO: ENOSPC error

/*
* Set state
*
* @param block: Block number in DMAP
* @param state: Free ("F") or allocated ("A")
*/
function setBlock(block, state) {

}


/*
* ********************
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
* ********************
* ROOT DIRECTORY
*/

/*
* Get inode data for file
*
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function getFile(num) {

}

/*
* Write inode data for file
*
* data.children[3].children is "Root"
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function writeFile(num) {
    // nesting first element
    if (num === 0) {
        data.children[3].children = [{"name": "File " + num, "size": 1}];
    } else {
        // nesting (n > 1) elements

    }
}

/*
* Delete file from root directory
*
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function deleteFile(num) {

}

/*
* ********************
* DATA
*/

// Write in data sector
function writeData(address) {

}

// Delete data
function deleteData(address) {

}