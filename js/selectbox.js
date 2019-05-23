var fileOptions = [
    "Select one:",
    "Add small file (one data block)",
    "Add big file (two data blocks)",
    "Remove file"
];

const select = d3.select('body')
    .append('select')
    .on('change', selectOption);

const options = select
    .selectAll('option')
    .data(fileOptions).enter()
    .append('option')
    // Disable first selection option
    .attr('disabled', d => (d === fileOptions[0]) ? true : null )
    .text(d => d);

function selectOption() {
    let selectValue = d3.select('select').property('value');
    
    switch (selectValue) {
        case fileOptions[0]: break;
        case fileOptions[1]: fuseOpen(false); break;
        case fileOptions[2]: fuseOpen(true); break;
    }
    
    updateData();
}