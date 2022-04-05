// Invoked on the commit-msg git hook by yorkie.

// const chalk = require('chalk')
const msgPath = '.git/COMMIT_EDITMSG' // process.env.GIT_PARAMS
const msg = require('fs') 
  .readFileSync(msgPath, 'utf-8')
  .trim() 

const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/
const mergeRE = /^(Merge pull request|Merge branch)/

if (!commitRE.test(msg)) {
    if(!mergeRE.test(msg)){
      console.log()
      console.error(
        `比如：
        fix:某个bug,
        frat: 某个功能，
        具体逻辑请看scripts/verifyCommit.js
        `
        )
      // console.error(
      //   `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      //     `invalid commit message format.`
      //   )}\n\n` +
      //     chalk.red(
      //       `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      //     ) +
      //     `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
      //     `    ${chalk.green(
      //       `fix(v-model): handle events on blur (close #28)`
      //     )}\n\n` +
      //     chalk.red(`  See .github/commit-convention.md for more details.\n`)
      // )
    }
}