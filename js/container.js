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
            "name": "DMAP", "size": 16
        }, {
            "name": "FAT", "size": 256
        }, {
            "name": "Root", "size": 64
        }, {
            "name": "Data", "size": 0
        }]
};

// Forcing object copy by value not reference
const newData = JSON.parse(JSON.stringify(data));

/*
* DMAP
*/

// Marking free space in DMAP als "F"
// Size value is (16 available dmap blocks / 65087 data blocks)
/*for (let i = 0; i < 65086; i++) {
    newData.children[1].children[i] = [{"name": "F", "size": 0.00024582481}];
}*/



// newData.children[1].children = [{"name": "A", "size": 2}];

/*
* ROOT DIRECTORY
*/

// Adding new file to root directory
newData.children[3].children = [{"name": "File 1", "size": 1}];

// JSON data
/*var data = {
    "name": "Container",
    "children": [
    {
        "name": "Superblock",
        "children": [{"name": "Sub A1", "size": 1}]
    }, {
        "name": "DMAP",
        "children": [{"name": "Sub B1", "size": 16}]
    }, {
        "name": "FAT",
        "children": [{"name": "Sub A1", "size": 256}]
    }, {
        "name": "Root",
        "children": [{"name": "Sub A1", "size": 64}]
    }, {
        "name": "Data",
        "children": [{"name": "Sub A1", "size": 0}]
    }]
};*/
