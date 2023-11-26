### How to sync with upstream repo

```
git fetch upstream
git checkout main
```

***use this for linear history, keep your changes on top***
```
git rebase upstream/main
```

### How to deploy
```
nix develop nixpkgs#deno
git pull
npm version v0.10.8-rc.2
deno task test
deno task build
npm login
cd dist
npm publish dist --tag rc --access=publish --dry-run
npm publish dist --tag rc --access=publish --dry-run
```