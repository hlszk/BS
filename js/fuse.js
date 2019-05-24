/*
* Loose implementation of FUSE methods
*/

// Start
fuseInit();

// Container structures are initialized and drawn
function fuseInit() {
    console.log("fuseInit() called.");

    drawContainer();
}

// Check which file number to write
function fuseOpen() {
    console.log("fuseOpen() called.");

    // Find next free DMAP block
    let freeBlock = getFreeBlock();
    if (freeBlock !== undefined) {
        // Allocate DMAP block
        setBlock(freeBlock, "A");

        // TODO: Add FAT and Data

        // Add file to root
        fuseRead(freeBlock);

        // Add newly created file to delete dropdown menu
        createDeleteOptions();
    }
}

/*
* Read file new opened file
*
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function fuseRead(num) {
    console.log("fuseRead() called.");

    // Write file to root
    writeFile(num);

    // Make changes visible
    fuseWrite();
}

// Write a.k.a. "draw" file to container object
function fuseWrite() {
    console.log("fuseWrite() called.");

    drawContainer();
}

// Lists all files written in container
function fuseReaddir() {
    console.log("fuseReaddir() called.");

    let files = [];
    // Add all files in root to array
    for (let child in data.children[3].children)
        if (data.children[3].children.hasOwnProperty(child))
            files.push(data.children[3].children[child].name);

    return files;
}

/*
* Remove file from container
*
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function fuseUnlink(num) {
    console.log("fuseUnlink() called.");

    // Sets DMAP block free
    setBlock(num, "F");

    // Remove file from root sector
    deleteFile(num);
}

/*
* Get stat data for file
*
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function fuseGetattr(num) {
    console.log("fuseGetattr() called.");

    return getFile(num);
}

// FUSE methods to implement
/*
var fuseMethods = [
    "fuseRelease"
];
*/
