# primeFactor-TS
# โจทย์
```
สร้าง API ของการทำ Todo list
- ดูว่าวันนี้มี list อะไรบ้าง
- สร้าง todo list
- อัพเดท status todo list
```

# init project

## init package
```
$ npm init
```

## install typescript
```
$ npm install -s typescript
```

## install jest cli
```
$ npm install --save-dev jest-cli @types/jest
```

## install jest
```
$ npm install -d ts-jest
```

## init tsconfig
```
add tsc infile package.json
{
    ...
    "scripts": {
    "test": "jest",
    "tsc": "tsc"
    },
    ...
}

generate file tsconfig.json
$ npm run tsc -- --init

uncomment and set path file tsconfig.json

    "outDir": "./dist",
    "rootDir": "./src",
```

## config jest ให้ใช้กับ typscrip

```
    ...
    "jest": {
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ]
  },
  ....
```

# Run

```
    npm install
    npm run serve
```

# Dependency

## Install library APIs web framework 
```
$ npm i -s express @types/express
```

## compile type script to java script
```
$ npm run tsc
```

## listening server
```
$ node dist/hello.js
```

## Install library mongo
```
$ npm i -s mongoose
```

## Install library แกะ body จาก request
```
$ npm i -s body-parser
```