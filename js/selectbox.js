var fuseMethods = [
    "fuseInit",
    "fuseReaddir",
    "fuseGetattr",
    "fuseOpen",
    "fuseRead",
    "fuseRelease",
    "fuseMknod",
    "fuseWrite",
    "fuseUnlink"
];

var select = d3.select('body')
    .append('select')
    .on('change', onchange);

var options = select
    .selectAll('option')
    .data(fuseMethods).enter()
    .append('option')
    .text(d => d);

function onchange() {
    let selectValue = d3.select('select').property('value');
    console.log(selectValue);
    updateData();
}