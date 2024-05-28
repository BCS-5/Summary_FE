# typescript

## 설치하기

> npm install -g typescript

아래와 같은 에러가 발생하면 sudo를 사용해주세요! (또는 윈도우일 경우 관리자 권한실행)

> sudo npm install -g typescript

-g 옵션을 뭘까요?

-g는 global 약자로 전역에 설치한다고 보시면 됩니다.

-g 없이 npm install typescript 로 설치하게 되면 해당 폴더에 node modules가 생성되고, 해당 폴더에서만 사용이 가능합니다.

## example

example.ts 파일을 생성 후 알아봅시다.

```typescript
var message: string = "Hello, TypeScript";

console.log(message);
```

코드를 보면 string이라는 타입이 변수 뒤에 붙는 것을 알 수 있습니다.

위 코드를 실행해볼까요?

> node example.ts

<img
  src="example1.png"
  width="718"
  height="404"
  alt="connect local"
/>

위와 같은 에러가 발생하는 것을 볼 수 있습니다. 이 에러는 위 코드를 js로 변환해줘야 하는 것을 의미합니다.

Node.js가 TypeScript 파일을 직접 실행할 수 없기 때문입니다. TypeScript는 JavaScript로 컴파일되어야 실행할 수 있습니다.

> tsc example.ts

TypeScript 파일(.ts)을 JavaScript 파일(.js)로 컴파일하기 위해 tsc(TypeScript Compiler)를 사용합니다.

위 명령어를 실행해서 컴파일을 하면, example.js 파일이 생성되는 것을 확인 할 수 있습니다.

> node example.js

이제 생성된 js파일을 실행하면 아래 결과를 확인 할 수 있습니다.

> Hello, TypeScript

## tsconfig.json

tsconfig.json 을 살펴볼까요?

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

tsconfig.json 파일은 TypeScript 컴파일러(tsc)의 설정을 정의하는 파일입니다.

이 파일을 통해 TypeScript 프로젝트의 컴파일 옵션, 포함할 파일, 제외할 파일 등을 설정할 수 있습니다.

- compilerOptions

  > compilerOptions 섹션은 TypeScript 컴파일러의 다양한 옵션을 설정합니다. 이 섹션에는 여러 가지 옵션이 포함될 수 있으며, 여기서는 주요 옵션들에 대해 설명합니다.

  - target
    > TypeScript 코드를 어떤 ECMAScript 버전으로 컴파일할지 설정합니다.  
    > 예시 : "es5", "es6", "es2017", "es2020" 등
  - module
    > JavaScript 모듈 시스템을 설정합니다.  
    > 예시 : "commonjs", "amd", "es6", "es2020", "none" 등
  - strict
    > 모든 엄격한 유형 검사 옵션을 활성화합니다. 이는 noImplicitAny, strictNullChecks 등 여러 옵션을 포함합니다.  
    > 예시 : true, false
  - outDir:
    > 컴파일된 JavaScript 파일이 저장될 디렉토리를 지정합니다.  
    > 예시 : 문자열 경로

- include

  > include 섹션은 컴파일할 파일이나 디렉토리를 지정합니다. 이 예시에서는 src 디렉토리 내의 모든 파일이 컴파일 대상으로 포함됩니다.  
  > 예시 : 배열 형식으로 파일 경로나 디렉토리를 지정할 수 있습니다. src 디렉토리 아래의 모든 파일과 서브 디렉토리의 파일을 컴파일 대상으로 포함합니다.

- exclude

  > exclude 섹션은 컴파일에서 제외할 파일이나 디렉토리를 지정합니다. 이 예시에서는 node_modules 디렉토리가 컴파일 대상에서 제외됩니다.  
  > 컴파일하지 않을 파일 및 디렉토리를 지정합니다. 위 설정에서는 node_modules 디렉토리의 파일을 컴파일 대상에서 제외합니다.

이 설정 파일을 통해 TypeScript 프로젝트의 컴파일러 옵션을 쉽게 관리할 수 있으며, 프로젝트의 일관성을 유지할 수 있습니다. TypeScript 컴파일러는 tsconfig.json 파일을 읽고 설정된 옵션에 따라 코드를 컴파일합니다.

## 타입스크립트의 주요 기능

### 엄격한 문법

```typescript
let myName: string = "baekki";

myName = 123;

myName = true;
```

위 코드를 입력해보시면, 아래와 같은 에러를 확인 할 수 있습니다.

즉, myName은 string(문자열) 타입으로 정의했는데, 숫자형 / boolean형을 할당하려해서 발생하는 문제입니다. (컴파일 에러)

### 컴파일 에러 VS 런타임 에러

- 컴파일 에러 : 컴파일 에러는 프로그램을 컴파일하는 동안 발생하는 오류입니다. 이러한 오류는 소스 코드를 실행 가능한 프로그램으로 변환하는 과정에서 컴파일러가 발견합니다. 컴파일 에러는 주로 문법 오류, 타입 오류 등 코드 작성 시 잘못된 부분에서 발생합니다. 컴파일 에러는 런타임 에러와 달리 프로그램이 실행되기 전에 발견되므로, 실행 전에 수정할 수 있습니다.

  > 프로그램이 실행되는 동안 발생, 실행 시점에 발견, 예외 처리/null 참조/형 변환 오류 등이 주된 원인, 코드의 잘못된 논리나 상태로 인해 발생

- 런타임 에러 : 런타임 에러는 프로그램이 실행되는 동안 발생하는 오류입니다. 이러한 오류는 컴파일 단계에서는 발견되지 않으며, 프로그램이 실행될 때 비로소 발생합니다.
  > 프로그램을 컴파일하는 동안 발생, 실행 전에 발견, 문법 오류, 타입 오류 등이 주된 원인 컴파일러가 소스 코드를 분석하여 오류를 검출

에러를 발생시켜 봅시다.

```javascript
// run-error.js

function greet(user) {
  console.log("Hello, " + user.name);
}

let myProfile = {
  name: "baekki",
};

greet(null);
```

실행하면 아래와 같은 에러를 확인 할 수 있습니다.

> Cannot read properties of null (reading 'name')

```typescript
function greet(user: { name: string }): void {
  console.log("Hello, " + user.name);
}

let myProfile: { name: string } = {
  name: "h662",
};

greet(null);
```

‼️ 함수명뒤의 ':void' 타입 적는 위치는, 아웃풋의 타입을 적어줍니다. 아웃풋 타입이 숫자일 경우는 number를 적습니다. void는 결과값이 없을 경우 입니다. 결과 값이 없다고 타입을 안적는 것이 아닙니다!

위 코드를 작성하면 아래와 같은 오류가 발생합니다.

> Argument of type 'null' is not assignable to parameter of type '{name: string;}'.

⚠️ 다른 오류가 발생한다면, tsconfig.json 파일을 만들어주어서 컴파일 항목에 해당 파일을 추가해주세요!

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*", "example.ts", "run-error.ts", "compile-error.ts"],
  "exclude": ["node_modules"]
}
```

### 타입 체크

src/add.ts 파일을 생성해주세요.

```typescript
// add.ts

function add(a: number, b: number): number {
  return a + b;
}

add(2, 3); // 5

add(2, "3");
```

위 코드는 function add의 결과값은 number 타입이여야 하는데, add(2, "3") 문자열이 있기 때문에, type error가 발생합니다.

그럼 타입스크립트의 타입들을 알아볼까요?

## types

### 숫자(number), 문자열(string), 불리언(boolean)

```typescript
// 1.ts

let myName: string = "baekki";
let age: number = 30;
let isRich: boolean = false;

console.log(myName, age, isRich);
```

> tsc  
> node dist/1.ts

> 결과 : baekki 30 false

### 배열

```typescript
// 2.ts

let list: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "kiwi"];

console.log(list, fruits);
```

> tsc  
> node dist/2.ts

> 결과 : [ 1, 2, 3, 4, 5 ] [ 'apple', 'banana', 'kiwi' ]

### 튜플

튜플은 고정된 개수의 요소를 ㅏㄱ지고, 각 요소의 타입이 미리 정해진 배열입니다.

예시를 볼까요?

```typescript
// 튜플 타입 선언
let person: [string, number];

// 올바른 튜플 할당
person = ["Alice", 25];

// 튜플 요소 접근
console.log(person[0]); // "Alice"
console.log(person[1]); // 25
```

만약 person에 아래와 같이 할당한다면, 에러가 발생합니다.

```typescript
let person: [string, number];
person = [25, "Alice"]; // Error: Type 'number' is not assignable to type 'string'.
```

이유는, person이라는 배열에 0번째는 string 타입이고, 1번째는 number 타입이 와야 합니다.

배열과 튜플의 차이점을 이해하셨나요?

- 배열 : 요소의 타입이 동일할 필요가 없음. 요소의 개수가 고정되어 있지 않음.

  > let array: (string | number)[] = ["Alice", 25, "Bob", 30];

- 튜플 : 각 요소의 타입과 순서가 고정되어 있음. 고정된 개수의 요소를 가짐.

  > let tuple: [string, number] = ["Alice", 25];

### any

반면, any 타입은 string, number, bool 등 어떠한 타입도 올 수 있습니다.

```typescript
// 3.ts

let allVars: any[] = ["baekki", 30, true, 1234, "abcd", false];

console.log(allVars);

let yourName: any = 1234;

console.log(yourName);
```

모두 any타입으로 처리하면 판하죠! 하지만 모두 any타입으로 처리하면 타입스크립트를 사용 할 이유가 없겠죠?

그럼 any타입은 언제 사용할까요?

타입을 알 수 없는 외부 API로부터 데이터를 호출 하는데 타입을 모를경우, 다양한 타입을 처리해야하는 경우 사용 할 수 있겠죠?

## 함수

```typescript
// 5.ts

function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}

console.log(greet("baekki"));

console.log(greet("baekki", "Hi"));
```

위 greet 함수를 보면, name과 greeting두 가지 매개변수를 갖고, greeting에는 string 타입으로 "Hello" 값이 할당되어 있습니다.

두 코드를 실행해보면 결과는 아래와 같습니다.

> Hello, baekki
> Hi, baekki

greet("baekki") 의 경우는, 매개변수가 2개 더라도 함수를 확인해보면 아래와 같습니다.

```typescript
function greet(name: string, greeting?: string): string;
```

여기서 '?' 기호는 TypeScript에서 선택적 프로퍼티(Optional Property)를 나타냅니다. 이는 특정 프로퍼티가 반드시 필요하지 않음을 의미하며, 해당 프로퍼티가 없어도 객체가 인터페이스를 충족할 수 있게 합니다.

따라서, name("baekki")만 받고, greeting 매개변수가 없다면 "Hello" 값을 출력합니다.

이를, 선택적 매개변수와 기본값 이라 합니다.

## 인터페이스

TypeScript에서 인터페이스(Interface)는 객체의 구조를 정의하는 데 사용됩니다. 인터페이스는 객체가 가져야 할 프로퍼티와 메서드의 타입을 지정하여, 코드의 타입 안전성을 높이고 가독성을 개선하는 데 도움이 됩니다. 인터페이스는 클래스나 객체가 특정 구조를 따르도록 강제하는 역할을 합니다.

```typescript
// 6.ts

let yourProfile: {
  name: string;
  age: number;
  isRich: boolean;
} = {
  name: "baekki",
  age: 30,
  isRich: false,
};

console.log(yourProfile);
```

> 결과 : { name: 'baekki', age: 30, isRich: false }

그럼 아래 코드를 확인해 볼까요?

```typescript
// 6.ts

let myProfile: {
  name: string;
  age: number;
  isRich: boolean;
} = {
  name: "baekki",
  age: 30,
  isRich: true,
};

console.log(myProfile);

let yourProfile: {
  name: string;
  age: number;
  isRich: boolean;
} = {
  name: "h663",
  age: 99,
  isRich: false,
};

console.log(yourProfile);
```

myProfile, yourProfile을 보면, 같은 타입이 중복됩니다. 이럴 경우, 타입을 인터페이스로 정의해서 사용이 가능합니다.

인터페이스를 사용해서 아래처럼 코드를 수정할 수 있습니다.

```typescript
// 6.ts

interface IProfile {
  name: string;
  age: number;
  isRich: boolean;
}

let myProfile: IProfile = {
  name: "baekki",
  age: 30,
  isRich: true,
};

console.log(myProfile);

let yourProfile: IProfile = {
  name: "h663",
  age: 99,
  isRich: false,
};

console.log(yourProfile);
```

선택적 프로퍼티도 적용해볼까요?

```typescript
interface IProfile {
  name: string;
  age: number;
  isRich?: boolean;
}

let myProfile: IProfile = {
  name: "baekki",
  age: 30,
  isRich: true,
};

console.log(myProfile);

let yourProfile: IProfile = {
  name: "h663",
  age: 99,
};

console.log(yourProfile);
```

위 코드에서 IProfile 인터페이스에서 isRich는 선택적 프로퍼티 입니다. 따라서 yourProfile에서 isRich는 필수가 아닙니다.

### 타입 별칭(Type Alias)

타입스크립트에서 타입 별칭(Type Alias)은 특정 타입에 대해 별칭을 지정하여, 그 타입을 더 읽기 쉽고 간결하게 표현할 수 있게 해주는 기능입니다. 타입 별칭은 type 키워드를 사용하여 정의하며, 기본 타입, 객체 타입, 유니언 타입, 튜플 등 다양한 타입을 별칭으로 지정할 수 있습니다.

- 기본 타입 별칭  
  기본 타입에 대해 별칭을 지정할 수 있습니다.

  ```typescript
  type MyString = string;

  let name: MyString = "Alice";
  ```

- 객체 타입 별칭
  객체 타입에도 별칭을 지정할 수 있습니다.

  ```typescript
  type Person = {
    name: string;
    age: number;
  };

  let person: Person = {
    name: "Bob",
    age: 25,
  };
  ```

아래 예제도 살펴보세요!

```typescript
// 7.ts

type TProfile = {
  name: string;
  age: number;
  isRich?: boolean;
};

let oneProfile: TProfile = {
  name: "h662",
  age: 20,
  isRich: true,
};

console.log(oneProfile);

let twoProfile: TProfile = {
  name: "h663",
  age: 99,
};

console.log(twoProfile);
```

- 유니언 타입 별칭
  유니언 타입을 별칭으로 지정하여 여러 타입을 하나의 별칭으로 결합할 수 있습니다. 유니언 타입(Union Type)은 변수나 함수가 여러 타입을 가질 수 있도록 하는 기능입니다. 유니언 타입은 | 기호를 사용하여 두 개 이상의 타입을 결합합니다. 이를 통해 하나의 변수나 함수 인수가 여러 타입을 허용할 수 있습니다.

  ```typescript
  let value: string | number;

  value = "hello"; // OK
  value = 42; // OK
  ```

  타입은 가능하면 범위를 좁혀주는게 좋습니다. 모두 any로 하는건 가장 넓은 포괄적은 범위입니다.

  ```typescript
  type ID = string;

  type Days = "Monday" | "Friday" | "Sunday";
  ```

### 교차 타입 (Intersection Type)

교차 타입(Intersection Type)은 여러 타입을 하나로 결합하여 모든 타입의 멤버를 포함하는 새로운 타입을 만드는 기능입니다. 교차 타입은 & 기호를 사용하여 정의합니다. 이를 통해 두 개 이상의 타입을 결합하여 하나의 객체가 모든 결합된 타입의 특성을 가져야 하도록 강제할 수 있습니다.

```typescript
// 9.ts

type TProfile2 = {
  name: string;
  age: number;
  isRich?: boolean;
};

type TJob = {
  job: string;
};

type TJobProfile = TProfile2 & TJob;

const threeProfile: TJobProfile = {
  name: "baekki",
  age: 30,
  isRich: false,
  job: "Programmer",
};

console.log(threeProfile);
```

위 예시에서 TJobProfile = TProfile2 & TJob은 아래처럼 변경 할 수 있습니다.

```typescript
// 10.ts

type TJobProfile = TProfile2 & {
  job: string;
};
```

또는 아래처럼 interface 및 extends 키워드를 사용해서 작성해봅시다.

```typescript
interface IProfile2 {
  name: string;
  age: number;
  isRich?: boolean;
}

interface IJobProfile extends IProfile2 {
  job: string;
}

const fourProfile: IJobProfile = {
  name: "baekki",
  age: 30,
  isRich: false,
  job: "Programmer",
};

console.log(fourProfile);
```

‼️ extends 키워드를 사용해서 확장이 가능합니다.
