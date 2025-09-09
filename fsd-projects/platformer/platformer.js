$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(625, 620, 150, 20, "brown")
    createPlatform(275, 620, 150, 20, "brown")
    createPlatform(975, 620, 150, 20, "brown")
    createPlatform(0, 500, 150, 20, "brown")
    createPlatform(1250, 500, 150, 20, "brown")
    createPlatform(850, 500, 150, 20, "brown")
    createPlatform(400, 500, 150, 20, "brown")
    createPlatform(975, 380, 150, 20, "brown")
    createPlatform(275, 380, 150, 20, "brown")
    createPlatform(625, 380, 150, 20, "brown")
    createPlatform(850, 260, 150, 20, "brown")
    createPlatform(400, 260, 150, 20, "brown")
    createPlatform(625, 140, 150, 20, "brown")

  
    // TODO 3 - Create Collectables
    createCollectable("database", 675, 585, 0, 0)
    createCollectable("database", 325, 585, 0, 0)
    createCollectable("database", 1025, 585, 0, 0)
    createCollectable("database", 450, 465, 0, 0)
    createCollectable("database", 900, 465, 0, 0)
    createCollectable("database", 675, 345, 0, 0)
    createCollectable("database", 325, 345, 0, 0)
    createCollectable("database", 1025, 345, 0, 0)
    createCollectable("database", 450, 225, 0, 0)
    createCollectable("database", 900, 225, 0, 0)
    createCollectable("database", 675, 105, 0, 0)

    
    // TODO 4 - Create Cannons
    









    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
