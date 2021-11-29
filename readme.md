# create-lit-project


## Usage

```
npx create-lit-project [flags]
```

## Options

Symbol | Alias

- -o, --output

Expects: output directory relative to cwd of calling directory

Default: .

- -l, --language

Allowed: ts, js, typescript, javascript

Default: js

- -s, --styles

Allowed: shadow, css, sass, tailwind

Default: shadow

- -http, --server

Boolean, if you put it, it will set up an actual server rather than webpack dev server
Default: false


## Example

```
npx create-lit-project -o src
```

Makes a new project boiler plate at src. If you do not define one, it will be defaulted to '.' which will resolve to the current working directory running the command. Since only the output flag is specified, the other flags will be defaulted as defined above. 
