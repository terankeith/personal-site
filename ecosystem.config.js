module.exports = {
	apps: [
		{
			name: "personal-site",
			script: "npm start",
			time: true,
			instances: 1,
			autorestart: true,
			max_restarts: 50,
			watch: false,
			max_memory_restart: "1G",
			env: {
				PORT: 5000,
			},
		},
	],
	deploy: {
		production: {
			user: "root",
			host: "137.184.154.69",
			key: "deploy.key",
			ref: "origin/main",
			repo: "git@github.com:terankeith/personal-site.git",
			path: "/home/tkeith/apps/personal-site",
			"post-deploy":
				"npm install && npm run build && APP=production pm2 reload ecosystem.config.js --env production",
			env: {
				NODE_ENV: "production",
			},
		},
	},
}
