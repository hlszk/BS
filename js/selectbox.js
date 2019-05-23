var fuseMethods = [
    "Add small file (one data block)",
    "Add big file (two data blocks)",
    "Remove file"
];

const select = d3.select('body')
    .append('select')
    .on('change', onchange);

const options = select
    .selectAll('option')
    .data(fuseMethods).enter()
    .append('option')
    .text(d => d);

function onchange() {
    let selectValue = d3.select('select').property('value');
    console.log(selectValue);
    updateData();
}