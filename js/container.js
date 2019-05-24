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
            "name": "FAT"
        }, {
            "name": "Root"
        }, {
            "name": "Data"
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

/*
* Write next address to table
*
* data.children[2].children is "FAT"
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function writeAddress(num) {
    // One DMAP block points to two FAT blocks
    let fatBlock = (num * 2);

    /*
    * As stated in README, FAT sector points to random data blocks
    * This promotes a better understanding of how the allocation table works
    *
    */
    // Shuffle array with available data blocks
    dataBlocksAvailable.sort(() => Math.random() - 0.5);

    // Pop two free data blocks from array with available data blocks
    // Save these two free data block addresses to new array
    let dataBlocksToFill = dataBlocksAvailable.splice(0,2);

    // Write two fat blocks with addresses in data block
    data.children[2].children[fatBlock] =
        {"name": (+num + 1) + " → " + dataBlocksToFill[0], "size": 1, "address": dataBlocksToFill[0]};
    data.children[2].children[++fatBlock] =
        {"name": (+num + 1) + " → " + dataBlocksToFill[1], "size": 1, "address": dataBlocksToFill[1]};

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

/*
* Array with 32 elements representing data blocks available to fill
* Looks like [0, 1, ... , 31]
*
* */
let dataBlocksAvailable = [...Array(32).keys()].map(x => x);

/*
* Draw empty data blocks
* data.children[1].children is "Data"
*
* */
for (let i = 0; i < 32; i++) {
    data.children[4].children[i] = {"name": "", "size": 1};
}

// Write in data sector
function writeData(address) {
    console.log(data.children[4].children[address].name);
    data.children[4].children[address].name = "File 1";
    console.log(data.children[4].children[address].name);
}

// Delete data
function deleteData(address) {

}