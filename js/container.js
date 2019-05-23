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

writeFile(0);
writeFile(1);

// Get next free block
function getFreeBlock() {

    // Iterate all DMAP entries
    for (let block in data.children[1].children)
        if (data.children[1].children.hasOwnProperty(block) &&
            data.children[1].children[block].name === "F") {
            return block;
        }
    console.error("error ENOSPC: Not enough space")
}

/*
* Set state
*
* @param block: Block number in DMAP
* @param state: Free ("F") or allocated ("A")
*/
function setBlock(block, state) {
    data.children[1].children[block].name = state;
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
* Get stat data for file
*
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function getFile(num) {
    // Current timestamp
    const date = new Date();
    return {
        "name": "File " + (num + 1),
        "children": [
            {
                "name": date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(), "size": .5
            }, {
                "name": "Blockgröße 2", "size": .5
            }]
    };
}

/*
* Write file information
*
* data.children[3].children is "Root"
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function writeFile(num) {
    // Get stat data for file
    let child = getFile(num);

    // Nesting first element
    if (num === 0) {
        data.children[3].children = [child];
    } else {
        // Nesting (n > 1) elements
        data.children[3].children[num] = child;
    }
}

/*
* Delete file from root directory
*
* data.children[3].children is "Root"
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function deleteFile(num) {
    data.children[3].children[num] = {};
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