# A collection of React things

### Run locally with `yarn start`
### Run production build with 
1. `docker build -t react-playground .`
2. `docker run -d -p 80:80 react-playground`

Currently covers
```js
const routesConfig = {
    "Redux Saga": {
        path: "/saga",
        component: SagaExample,
        visible: true,
    },
    "Render Props": {
        path: "/render-props",
        component: RenderProps,
        visible: true,
    },
    "Recompose Context": {
        path: "/context",
        component: Context,
        visible: true,
    },
    "React Select": {
        path: "/select",
        component: SelectContainer,
        visible: true,
    },
    "Virtualized Tables": {
        path: "/tables",
        component: Tables,
        visible: true,
    },
    "HOC Testing": {
        path: "/hoc-testing",
        component: Hocs,
        visible: true,
    },
    "Routing": {
        path: "/routing",
        component: RoutingButton,
        visible: false,
    },
    "Lifecycle": {
        path: "/lifecycle",
        component: Lifecycle,
        visible: true,
    },
    "Reaxios Hook": {
        path: "/use-reaxios-select",
        component: SelectUsingReaxios,
        visible: true,
    },
    "Apollo GraphQL": {
        path: "/apollo-gql",
        component: ApolloGraphql,
        visible: true,
    },
    "Forms": {
        path: "/forms",
        component: Forms,
        visible: true,
    },
    "Immutable Redux": {
        path: "/immutable-redux",
        component: ImmutableRedux,
        visible: true,
    },
    "Code Splitting": {
        path: "/code-splitting",
        component: CodeSplitApp,
        visible: true,
    },
    "Progress Bar": {
        path: "/progress-bar",
        component: ProgressBar,
        visible: true,
    },
    "Lifecyle HOC": {
        path: "/lifecyle-hoc",
        component: LifecycleHoc,
        visible: true,
    },
    "Promise Count": {
        path: "/promise-count",
        component: PromiseCount,
        visible: true,
    },
    "Redux middleware": {
        path: "/redux-middleware",
        component: ReduxMiddleware,
        visible: true,
    },
    "Libphonenumber": {
        path: "/lib-phone-number",
        component: ExampleNumber,
        visible: true,
    },
    "Infinte List": {
        path: "/infinite-list",
        component: InfinteList,
        visible: true,
    }
};
```
