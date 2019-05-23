/*
* Selection box for adding or removing files in container
*/

// Options of selection box
const fileOptions = [
    "Select one:",
    "Add file",
    "Remove file"
];

// Add selection menu element to DOM
const select = d3.select('body')
    .append('select')
    // Selection handler on changing options
    .on('change', selectOption);

// Add selection options to newly created DOM element
const options = select
    .selectAll('option')
    .data(fileOptions).enter()
    .append('option')
    // Disable first selection option
    .attr('disabled', d => (d === fileOptions[0]) ? true : null )
    .text(d => d);

// Selection handler
function selectOption() {
    let selectValue = d3.select('select').property('value');

    // Calling FUSE methods
    switch (selectValue) {
        case fileOptions[0]: break;
        case fileOptions[1]: fuseOpen(); break;
    }
    
    updateData();
}