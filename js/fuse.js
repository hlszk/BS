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
function fuseOpen(isBiggerFile) {
    console.log("fuseOpen() called.");

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
* Get inode data for file
*
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function fuseGetattr(num) {
    console.log("fuseGetattr() called.");

}

// FUSE methods to implement
/*
var fuseMethods = [
    "fuseReaddir",
    "fuseRead",
    "fuseRelease",
    "fuseMknod",
    "fuseWrite",
    "fuseUnlink"
];
*/
