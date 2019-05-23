var fileOptions = [
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
    .text(d => d);

function selectOption() {
    let selectValue = d3.select('select').property('value');
    
    switch (selectValue) {
        case fileOptions[0]: fuseOpen(false); break;
        case fileOptions[1]: fuseOpen(true); break;
    }
    
    updateData();
}