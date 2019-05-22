/*
* Container structures.
*/

// Container structure names and size
// Object key: Name
// Object value: Size
const containerStructures = {
    "Superblock": 1,
    "DMAP": 16,
    "FAT": 256,
    "Root": 64,
    "Data": 0
};

// Maximum size for data block
const maxDataSize = 65087;

// Container as array for better object manipulation
var data = {
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

console.log(data.children[1]);
console.log(data.children.length);

// Forcing copying JavaScript object by value not reference
const newData = JSON.parse(JSON.stringify(data));
newData.children[1].children = [{"name": "A1", "size": 1}];

// var data = JSON.stringify(dataObject);

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
