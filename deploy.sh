next build && \
next export -o dist && touch dist/.nojekyll && \
git add . && \
git commit -m "deploy script" && \
git push origin source && \
git checkout master && \
git rm -rf ./ .next node_modules && \
git checkout origin/source -- dist && \
mv dist/* ./ && \
rm -rf dist && \
git add . && \
git push origin master