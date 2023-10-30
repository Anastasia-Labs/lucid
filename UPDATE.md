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
deno task build
cd dist
npm publish 
```