# go-cors-test

### Instructions
###### server
```
cd server
railway init
railway up // make sure there is no trailing .0 in go.mod
railway run go run .
railway domain
```

###### client
- `cd client`
- Add `base: '/**REPO_NAME**/',` to `vite.config.ts`
- Add `.github/workflows/deploy.yml`
- Run `npm i -D gh-pages`
- Add `"homepage": "https://**GITHUB_USERNAME**.github.io/**REPO_NAME**",` and ```
	"predeploy": "npm run build",
	"deploy": "gh-pages -d dist",
``` in scripts to `package.json`
- Replace `localhost` in `src/App.tsx` with the server domain
- Run `npm run deploy`
- (Note: may need to add read/write props to actions?)
