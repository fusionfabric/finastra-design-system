const name = 'shared';
const suiteName = 'SharedModule';

module.exports = {
  name: name,
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/components/wizard',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './testresults/',
        outputName: `junit-${name}.xml`,
        suiteName,
        classNameTemplate: '{classname}',
        titleTemplate: `${suiteName} › {classname} › {title}`,
        ancestorSeparator: ' › '
      }
    ]
  ]
};
