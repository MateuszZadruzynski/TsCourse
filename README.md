Type Script projects from scratch.

Compliation:
\n comand : tsc [name].ts
\n descrition: create js file and valid code

Automatic compliation (one file):
\n comand : tsc [name].ts --watch | tsc [name].ts --w
\n descrition: watch changes in [name] file

Automatic compliation (multiple files):
\n comand : tsc --init
\n descrition: create tsconfig.json
\n useful additional configuration:
* "exclude" : ["node_modules","file.ts"] - exclude files from watch list
* "include" : ["file.ts", "pages"] - include file/folder to watch
