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

    // Check which files are already written
    // TODO: fuseReaddir();

    fuseRead(0);
    fuseRead(1);
    fuseRead(2);
}

/*
* Read file new opened file
*
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function fuseRead(num) {
    console.log("fuseRead() called.");

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

    // console.log(data.children[3].children);
}

/*
* Remove file from container
*
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function fuseUnlink(num) {
    console.log("fuseUnlink() called.");

    // Sets two DMAP blocks free
    setBlock(num, "F");
    setBlock((num + 1), "F");

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
