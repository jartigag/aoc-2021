#!/bin/sh

rm README.md

for f in $(find . -name "*.ts" -not -path "./node_modules/*" -not -path "./src/utils/*" -not -name "*test*" -not -name "*data*" -not -name "*part*")
do
    title=$(grep -e "--- Day " $f | sed 's/--- //g' | sed 's/ ---//g' | sed 's/: /:  /g')
    echo "- [$title](https://github.com/jartigag/aoc-2021/blob/main/$f)" >> solutions_links.tmp
done

for f in $(find . -name "*part*.ts" -not -path "./node_modules/*" -not -path "./src/utils/*" -not -name "*test*" -not -name "*data*")
do
    day=$(echo $f | sed 's/\(.*\)part.*/\1/' | tail -c 2)
    echo "- [Day $day, part 2](https://github.com/jartigag/aoc-2021/blob/main/$f)" >> solutions_links.tmp
done


cat << EOF >> README.md
# 🎄 AoC
my solutions to Advent of Code 2021.
this year i'm learning typescript, so i forked this [aoc-ts-starter](https://github.com/bpiggin/advent-of-code-typescript-starter) repo.

if i get the time, i'll try to take a look at [r/adventofcode](https://www.reddit.com/r/adventofcode) and post my favourites here. people is amazing.

> as last year, our group “[TLMn00bs](https://github.com/TLMn00bs)” keeps sharing our solutions in this [repository](https://github.com/TLMn00bs/advent-of-code).

#### getting started

\`\`\`shell
$ time yarn install
yarn install v1.22.15
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

Done in 2.42s.

real    0m2,601s
user    0m3,294s
sys     0m1,299s

$ du -hs node_modules/
147M    node_modules/
\`\`\`
not bad.. 😅

### solutions

EOF

sort solutions_links.tmp | sed 's/\(.*\)part.*/\t\1part2.ts)/g' >> README.md
rm solutions_links.tmp
