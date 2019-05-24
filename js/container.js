/*
* Container structures.
*/

// Object with container sectors and their block size
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
            "name": "Root"
        }, {
            "name": "Data", "size": 32
        }]
};

/*
* Initializing first child object for each container sector
*
* It makes filling the object a lot easier,
* because no ( n > 0 ) check required for adding new children
*/
for (let sector in data.children) {
    if (data.children.hasOwnProperty(sector))
        data.children[sector].children = [];
}


/*
* ********************
* DMAP
*/

/*
* Allocating free space in DMAP als "F"
* data.children[1].children is "DMAP"
*
* */
for (let i = 0; i < 16; i++) {
    data.children[1].children[i] = {"name": "F", "size": 1};
}

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

    // Child node for file stat information
    return {
        "name": "File " + (+num + 1),
        "children": [
            {
                "name":
                    date.getHours() + ":" +
                    // adds leading zero if missing
                    ('0' + date.getMinutes()).slice(-2) + ":" +
                    // adds leading zero if missing
                    ('0' + date.getSeconds()).slice(-2), "size": .5
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
    // Maximal number of files stored
    const maxNumberOfFiles = 16;

    // Check for number of files limit
    (num >= maxNumberOfFiles) ?
        console.error("error ERNOENT: File count limit reached") :

        // Get stat data for file and nest it into container object
        data.children[3].children[num] = fuseGetattr(num);
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