# Todo-List

#### Poku-Redux-Version

---

## 프로젝트 설명

토이프로젝트로 가장많이 하는 투두리스트 만들기를 통해 react 및 redux의 사용법을 익히는것을 목적으로 진행하였습니다.
기본적인 C,R,U,D 기능을 갖추고 있습니다.

## 사용한 기술

- CSS
- JSX
- React
- Redux

## 컴포넌트 설명

### Input.js

새로운 투두를 만드는 컴포넌트입니다.
useState로 input창에 입력되어있는 문자들을 관리하고 dispatch를 이용하여 todos에 새로운 todo를 입력합니다.

## TodoList.js

todos를 .map함수를 이용하여 각 todo별로 쪼개어 Todo.js컴포넌트로 보내주고 Todo.js 에서 나온 반환값들을 묶어서 UI에 표시해 줍니다.

## Todo.js

TodoList.js에서 받은 todo를 UI로 표시해주고 update와 delete 기능을 가지고 있습니다. todo의 완료상태와 수정가능한 상태에따라 css표현이 다르게 되도록 설정하였고 완료상태와 삭제를 담당하는 버튼이 두개있습니다.
수정을 원할경우 더블클릭을 함으로써 상태가 변경되고 UI또한 수정가능한 상태로 변환되게 하였습니다.
수정값을 입력하지 않을 경우 기존에 입력되어있던 값으로 설정됩니다.

## Store.js

리듀서와 각 액션함수들을 저장하고 있습니다.
