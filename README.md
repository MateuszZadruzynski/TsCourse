Type Script projects from scratch.
<br />
Compliation:
<br /> comand : tsc [name].ts
<br /> descrition: create js file and valid code

Automatic compliation (one file):
<br /> comand : tsc [name].ts --watch | tsc [name].ts --w
<br /> descrition: watch changes in [name] file

Automatic compliation (multiple files):
<br /> comand : tsc --init
<br /> descrition: create tsconfig.json
<br /> useful additional configuration:
* "exclude" : ["node_modules","file.ts"] - exclude files from watch list
* "include" : ["file.ts", "pages"] - include file/folder to watch
