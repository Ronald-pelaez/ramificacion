const config = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'docs/CHANGELOG.md' // Ruta personalizada para el changelog
            }
        ],
        [
            '@semantic-release/git',
            {
                assets: ['dist/**/*', 'package.json', 'docs/CHANGELOG.md'], // Actualiza la ruta aquí también
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
            }
        ],
        '@semantic-release/github'
    ]
};

module.exports = config;
