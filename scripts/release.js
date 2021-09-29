/* eslint-disable @typescript-eslint/no-var-requires */

const prompts = require('prompts')
const { spawn } = require('child_process')

async function doRelease() {
  const response = await prompts([
    {
      type: 'select',
      name: 'package',
      message: 'Select package',
      choices: [
        { title: 'Webapp', value: 'webapp' },
        { title: 'Webapp-redux', value: 'webapp-redux' },
        { title: 'Common', value: 'common' },
        { title: 'All', value: '' },
      ],
    },
    {
      type: 'select',
      name: 'type',
      message: 'Select a release type',
      choices: [
        { title: 'patch', value: 'patch' },
        { title: 'minor', value: 'minor' },
        { title: 'major', value: 'major' },
        { title: 'auto', value: '' },
      ],
    },
    {
      type: 'confirm',
      name: 'confirmation',
      message: (prev, { package, type }) => `Release ${package}${type ? ':' + type : ''}?`,
      initial: true,
    },
  ])

  if (response.confirmation) {
    const releaseCommandOptions = [
      ...(response.package ? [`release:${response.package}`] : ['releaseall']),
      ...(response.type && [`--release-as`, `${response.type}`]),
      '--colors',
    ]

    const releaseCommand = spawn('yarn', releaseCommandOptions)

    releaseCommand.stdout.on('data', data => {
      process.stdout.write(data)
    })

    releaseCommand.stderr.on('data', data => {
      process.stdout.write(data)
    })

    releaseCommand.on('error', error => {
      process.stdout.write(`error: ${error.message}`)
    })

    releaseCommand.on('close', code => {
      process.stdout.write(`Release process exited with code ${code}`)
    })
  } else {
    process.stdout.write('Release cancelled')
  }
}

doRelease()
