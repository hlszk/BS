/*
* Selection box for adding or removing files in container
*/

// Add button
d3.select('#addFile')
    .on('click', function () {
        d3.event.stopPropagation();
        fuseOpen();
    });

// Options of selection box
const deleteOptions = [
    "Delete file",
    "File 1",
    "File 2"
];

// Add selection menu element to DOM
const select = d3.select('body')
    .append('select')
    // Selection handler on changing options
    .on('change', selectOption);

// Add selection options to newly created DOM element
const options = select
    .selectAll('option')
    .data(deleteOptions).enter()
    .append('option')
    // Disable first selection option
    .attr('disabled', d => (d === deleteOptions[0]) ? true : null )
    .text(d => d);

// Selection handler
function selectOption() {
    let selectValue = d3.select('select').property('value');

    // Calling FUSE methods
    switch (selectValue) {
        case deleteOptions[0]: break;
        case deleteOptions[1]: fuseUnlink(0); break;
    }
    
    updateData();
}