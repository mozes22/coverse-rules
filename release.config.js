module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://gitlab.com/coverse-tech/coverse-rules.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
        tarballDir: 'dist',
        pkgRoot: '.',
      },
    ],
    [
      '@semantic-release/gitlab',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        gitlabUrl: 'https://gitlab.com',
        gitlabApiPathPrefix: '/api/v4',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
