/*
* Container structures.
*/

// Maximum size for data block
const maxDataSize = 65087;

// Container structures with block sizes als values
let data = {
    "name": "Container",
    "children": [
        {
            "name": "Superblock", "size": 1
        }, {
            "name": "DMAP",
        }, {
            "name": "FAT", "size": 128
        }, {
            "name": "Root", "size": 64
        }, {
            "name": "Data", "size": 64
        }]
};

// Forcing object copy by value not reference
var newData = JSON.parse(JSON.stringify(data));

/*
* DMAP
*/

// Allocating free space in DMAP als "F"

newData.children[1].children = [{"name": "F", "size": 1}];

for (let i = 1; i < 16; i++) {
    newData.children[1].children[i] = {"name": "F", "size": 1};
}


/*
* ROOT DIRECTORY
*/

// Adding new file to root directory
newData.children[3].children = [{"name": "File 1", "size": 1}];
