module.exports = {
  name: 'pizza',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pizza',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
