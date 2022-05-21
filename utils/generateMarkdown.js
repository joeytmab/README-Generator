// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArray = ["Apache", "Boost", "Eclipse", "GPLv2", "ISC",
"Mozilla-Public", "MIT", "Other"]

function renderLicenseBadge(license) {
  if (license === licenseArray[0]) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === licenseArray[1]) {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license === licenseArray[2]) {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  } else if (license === licenseArray[3]) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === licenseArray[4]) {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else if (license === licenseArray[5]) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license === licenseArray[6]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === licenseArray[7]) {
    return "Other"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArray[0]) {
    return `[${licenseArray[0]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === licenseArray[1]) {
    return `[${licenseArray[1]}](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === licenseArray[2]) {
    return `[${licenseArray[2]}](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === licenseArray[3]) {
    return `[${licenseArray[3]}](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === licenseArray[4]) {
    return `[${licenseArray[4]}](https://opensource.org/licenses/ISC)`
  } else if (license === licenseArray[5]) {
    return `[${licenseArray[5]}](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === licenseArray[6]) {
    return `[${licenseArray[6]}](https://opensource.org/licenses/MIT)`
  } else {
    return ``
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ## TABLE OF CONTENTS
  * [Description](#description)
  * [Installation](#installation)
  * [Usage Parameters](#usage)
  * [Contributors](#contributors)
  * [Test Parameters](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage Parameters
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Test Parameters
  ${data.tests}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Questions
  For any assistance, you can contact me on these platforms: </br>
  Github: github.com/${data.github} </br>
  Email: ${data.email} </br>





`;
}

module.exports = generateMarkdown;
