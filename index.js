let input = document.getElementById("example-input");
let mf = document.getElementById('formula');
let options = {};

// Initialize the drawer to draw to canvas
let smilesDrawer = new SmilesDrawer.Drawer(options);
// Alternatively, initialize the SVG drawer:
// let svgDrawer = new SmilesDrawer.SvgDrawer(options);

input.addEventListener("input", function() {
  // Clean the input (remove unrecognized characters, such as spaces and tabs) and parse it
  SmilesDrawer.parse(input.value, function(tree) {
    // Draw to the canvas
    smilesDrawer.draw(tree, "example-canvas", "light", false);
    mf.innerHTML = smilesDrawer.getMolecularFormula()
    // Alternatively, draw to SVG:
    // svgDrawer.draw(tree, 'output-svg', 'dark', false);
  });
});