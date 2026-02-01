---
title: "Git Large File Storage (LFS)"
date: 2026-01-31T23:40:55-08:00
draft: false
description: "A quick and easy guide to using Git LFS."
---

### Git LFS Documentation

[Git Large File Storage](https://git-lfs.com/)

### Adding Large Files to Version Control with Git LFS

1. Verify Git LFS is installed and initialized. Make sure git hooks are updated.

```bash
git lfs install
```

1. Track the file types you want associated with Git LFS. This will update the `.gitattributes` file.

```bash
git lfs track "*.<file extension type>"
```

- It is also good to commit the `.gitattributes` file to update the changes.

```bash
git add .gitattributes
git commit -m "<insert commit message>"
```

1. You may need to rewrite the history to remove the original non-LFS commits of large files.

```bash
git rm --cached "<path to large file>"
git add .
git commit -m "<insert commit message>"
```

1. Re-include the large file path for LFS handling.

```bash
git add "<path to large file>"
git commit -m "<insert commit message>"
```

- Another alternative is to use LFS migrate to automate the process.

```bash
git lfs migrate import --include="*.<file extension type>"
```

1. Lastly, push the latest commits to your remote origin.

```bash
git push origin main
```

- Note that you may need to force push the commits and that the history may be rewritten.

```bash
git push origin main --force
```
