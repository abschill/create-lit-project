# create-lit-project


## Usage

```
npx create-lit-project [outdir] [options]
```

## Options

--template=tailwind

for tailwind css setup out of the box

## Example

```
npx create-lit-project newProjectDir --template=tailwind
```

Makes a new project boiler plate at newProjectDir. If you do not define one, it will be created in a directory named undefined xd

If you want to create it in the directory you're calling from, just write

```
npx create-lit-project .
```

or

```
npx create-lit-project . --template-tailwind
```