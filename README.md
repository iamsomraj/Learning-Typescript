# Learning Typescript

I have created this repository to gain knowledge about Typescript. Also, I have not worked with typescript on a practical level. So, this will be a nice way to get used to it so that I can work on my React projects.

## Useful points

1. Type is an easy way to refer to all the properties and methods that a value has. In TS, every value has a type. Used by TS compiler to analyse the code for errors.

2. Type Annotation - We write code to tell TS what type of value a variable will refer to. Here, developers tell the compiler.

3. Type Inference - Here, TS will try to guess the type of value that a variable is holding. But, in this case, TS compiler tries to infer.

4. If we are going to write variable declaration and initialization in the same line, then we don't require types. Here, typescript will determine the type automatically. But if we just declare the variable, then TS will assign the type : any to it.

5. Three cases to use Type Annotations:

- When function returns any type
- When declaration and initialization of variable happens on different lines
- When type of variable cannot be inferred

6. Type annotations and inference for functions:

Type inference do not work with the arguements of functions. We have to type annotate arguements. Type inference do work for the return of functions. But, we do not use it.

```
const add = (a: number, b: number): number => a + b;
```
7. Typed Arrays - In TS, we store same type of elements in the array.

## Content

1. Fetchjson - Used TS for fetching data from a fake API ( you know which one ) :P

## Objectives

1. To learn about the syntax of Typescript
2. Used ts-nodes package for compiling TS and using Node, both at the same time

## Developer

LinkedIn : [iamsomraj](https://www.linkedin.com/in/iamsomraj/) 😊

HackerRank: [iamsomraj](https://www.hackerrank.com/iamsomraj?hr_r=1) 😊

Portfolio: [Somraj Mukherjee](https://iamsomraj.github.io/) 😊

Google Play Store: [Somraj Mukherjee](https://play.google.com/store/apps/developer?id=Somraj+Mukherjee) 😊

## Show Your Support

Give me a star ⭐

if this project helped you 👦 👧

## Contributing

Pull requests are welcome. 🤝 For major changes, please open an issue first to discuss what you would like to change. 🙏

Please make sure to update tests as appropriate. ✌

## License

[MIT](https://choosealicense.com/licenses/mit/) 📰
