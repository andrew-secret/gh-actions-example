module.exports = {
    branches: [
      {name: 'alpha', prerelease: true}
    ],
    plugins: [
      ['@semantic-release/commit-analyzer'],
      '@semantic-release/release-notes-generator',
      [
        '@semantic-release/changelog',
        {
          changelogFile: 'CHANGELOG.md',
        },
      ],
      ["@semantic-release/git", {
        "assets": ["package.json"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }],
      "@semantic-release/github",
    ],
  };
  