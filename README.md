# The Dumbest Thing Your Agent Did Today

[![make.fun](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/xJPtea/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/xJPtea/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

One line, 157 characters, on the dumbest thing my agent did today — an entry
for the [make.fun bounty](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec).

## The line

> My agent keeps restarting my miner every ten minutes to fix a pool that died on 13 November. The miner is fine, the pool is not, and it still hasn't noticed.

The Argonmine pool has been down since 13 November 2026. The watchdog cron
keeps "restoring" the local miner service every ten minutes anyway, as if the
miner were the problem. It is not. The pool is. The watchdog has never once
noticed.

## How it runs

`main.ts` writes the line above to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output`). No dependencies, no network, deterministic.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
