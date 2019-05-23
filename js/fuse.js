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
* Get inode data for file
* @param num: The number under which the file was stored: [0..(maxNumberOfFiles - 1)]
*/
function fuseGetattr(num) {
    console.log("fuseGetattr() called.");

}

// FUSE methods to implement
/*
var fuseMethods = [
    "fuseReaddir",
    "fuseOpen",
    "fuseRead",
    "fuseRelease",
    "fuseMknod",
    "fuseWrite",
    "fuseUnlink"
];
*/
