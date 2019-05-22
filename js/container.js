/*
* Container structures.
*/

// Container structures with block sizes als values
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
* DMAP
*/

// Allocating free space in DMAP als "F"
// nesting first element
data.children[1].children = [{"name": "F", "size": 1}];
// nesting (n > 1) elements
for (let i = 1; i < 32; i++) {
    data.children[1].children[i] = {"name": "F", "size": 1};
}

// Forcing object copy by value not reference
var newData = JSON.parse(JSON.stringify(data));

/*
* ROOT DIRECTORY
*/

// Adding new file to root directory
newData.children[3].children = [{"name": "File 1", "size": 1}];
