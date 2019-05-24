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

/*
* Remove file from container
*
* @param isBiggerFile: false for one data block, true for two data blocks
*/
function fuseOpen() {
    console.log("fuseOpen() called.");

    // Check which files are already written
    // fuseReaddir();

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

}

/*
* Get stat data for file
*
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function fuseGetattr(num) {
    console.log("fuseGetattr() called.");

}

// FUSE methods to implement
/*
var fuseMethods = [
    "fuseRead",
    "fuseRelease",
    "fuseMknod",
    "fuseWrite",
    "fuseUnlink"
];
*/
