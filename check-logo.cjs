const sharp = require("sharp");

async function main() {
  const src = "public/Nabure_Systems_Logo_Transparente_2.png";
  await sharp(src).flatten({ background: "#ffffff" }).toFile("check-white.png");
  await sharp(src).flatten({ background: "#18181b" }).toFile("check-dark.png");
  console.log("done");
}

main();
