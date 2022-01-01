const fs = require("fs"),
    path = require("path"),
    child_process = require("child_process")

const { spawnSync } = child_process


async function main(...varargs) {
    const uri = (file) =>
        `https://raw.githubusercontent.com/mzpkjs/repository-template/master/${file}`

    const files = [
        "./.gitignore",
        "./scripts/update.js",
    ]

    spawnSync("curl", files.flatMap(file => [ uri(file), "--remote-name" ]), {
        cwd: process.cwd(),
        shell: true,
        stdio: "inherit",
    })
}


module.exports =
    main(...process.argv.slice(2))
        .catch(error => console.error(error))