var enbBemTechs = require('enb-bem-techs'),
    borschikTech = require('enb-borschik/techs/borschik');

module.exports = function (config) {
	var isProd = process.env.YENV === 'production';

	config.nodes('bundles/*', function (nodeConfig) {
		nodeConfig.addTechs([
			// essential
			[require('enb/techs/file-provider'), { target: '?.bemdecl.js' }],
			[enbBemTechs.files],
			[enbBemTechs.deps],
			// node.js
			[require('enb-diverse-js/techs/node-js'), { target: '?.pre.node.js' }],
			[require('enb-modules/techs/prepend-modules'), {
				source: '?.pre.node.js',
				target: '?.node.js'
			}],
			// browser.js
			[require('enb-diverse-js/techs/browser-js'), { target: '?.browser.js' }],
			[require('enb/techs/file-merge'), {
				target: '?.pre.js',
				sources: [/* '?.browser.bh.js', */ '?.browser.js']
			}],
			[require('enb-modules/techs/prepend-modules'), {
				source: '?.pre.js',
				target: '?.js'
			}],
			// bh
			[require('enb-bh/techs/bh-commonjs'), {
				bhOptions: {
					jsAttrName: 'data-bem',
					jsAttrScheme: 'json'
				}
			}],
			// client bh
			// [enbBemTechs.depsByTechToBemdecl, {
			//     target: '?.bh.bemdecl.js',
			//     sourceTech: 'js',
			//     destTech: 'bemhtml'
			// }],
			// [enbBemTechs.deps, {
			//     target: '?.bh.deps.js',
			//     bemdeclFile: '?.bh.bemdecl.js'
			// }],
			// [enbBemTechs.files, {
			//     depsFile: '?.bh.deps.js',
			//     filesTarget: '?.bh.files',
			//     dirsTarget: '?.bh.dirs'
			// }],
			// [require('enb-bh/techs/bh-bundle'), {
			//     target: '?.browser.bh.js',
			//     filesTarget: '?.bh.files',
			//     bhOptions: {
			//         jsAttrName: 'data-bem',
			//         jsAttrScheme: 'json',
			//     },
			//     mimic: 'BEMHTML'
			// }],

			// borschik
			[borschikTech, { sourceTarget: '?.css', destTarget: '?.min.css', tech: 'cleancss', freeze: true, minify: isProd }],
			[borschikTech, { sourceTarget: '?.js', destTarget: '?.min.js', freeze: true, minify: isProd }]
		]);

		nodeConfig.addTargets([
			'?.min.css',
			'?.node.js',
			'?.bh.js',
			'?.js'
		]);

		nodeConfig.addTechs([
			// essential
			[enbBemTechs.levels, {
				levels: [
					{ path: 'libs/bem-core/common.blocks', check: false },
					{ path: 'libs/bem-core/desktop.blocks', check: false },
					{ path: 'libs/bem-components/common.blocks', check: false },
					{ path: 'libs/bem-components/design/common.blocks', check: false },
					{ path: 'libs/bem-components/desktop.blocks', check: false },
					{ path: 'libs/bem-components/design/desktop.blocks', check: false },
					'blocks'
				]
			}],
			// css
			[require('enb-stylus/techs/stylus'), {
				target: '?.css',
				autoprefixer: {
					browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
				}
			}]
		]);
	});
};


