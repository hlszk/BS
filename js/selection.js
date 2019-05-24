/*
* Selection elements for adding or removing files in container
*/

// Button for adding a new file
d3.select('#addFile')
    .on('click', function () {
        d3.event.stopPropagation();
        fuseOpen();
    });

// Dropdown menu for deleting files
function createDeleteOptions() {
    // Remove old menu
    d3.select('#deleteFile').remove();

    /*
    * Fill menu with options
    *
    * First add "Delete file" header
    * Second add array with all files in root
    */
    let deleteOptions = ["Delete file"].concat(fuseReaddir());

    // Remove all already deleted "undefined" files from array
    deleteOptions = deleteOptions.filter(e => e);

    // Add selection menu element to DOM
    const select = d3.select('body')
        .append('select')
        .attr('id', 'deleteFile')
        // Selection handler on changing options
        .on('change', selectOption);

    // Add selection options to newly created DOM element
    const options = select
        .selectAll('option')
        .data(deleteOptions).enter()
        .append('option')
        // Disable first selection option
        .attr('disabled', d => (d === deleteOptions[0]) ? true : null)
        .text(d => d);

}

// Selection handler
function selectOption() {
    // Take menu selection string and extract file number
    let selectValue = d3.select('select').property('value').slice(-2);

    // Delete selected file number
    fuseUnlink(((+selectValue) - 1));

    // Make changes visible
    fuseWrite();

    // Redraw button menu
    createDeleteOptions();
}