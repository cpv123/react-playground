import SagaExample from './redux-saga/TodosSaga';
import Tables from './virtualized-tables/Tables';
import Context from './recompose-context/Provider';
import SelectContainer from './react-select';
import RenderProps from './render-props';
import Hocs from './hoc-testing';
import RoutingButton from './routing';
import Lifecycle from './lifecycle';
import SelectUsingReaxios from './reaxios-hook/SelectUsingReaxios';
import ApolloGraphql from './apollo-graphql';
import Forms from './forms';
import ImmutableRedux from './immutable-js';
import CodeSplitApp from './code-splitting';
import ProgressBar from './progress-bar';
import LifecycleHoc from './update-for-props-hoc';
import PromiseCount from './promise-count'
import ReduxMiddleware from './redux-middleware';
import ExampleNumber from './libphonenumber';
import InfinteList from './infinite-scroll';
import ContextHooks from './context-comparison'
import ConnectedComponent from './map-state-dev-tools'
import OneFileRedux from './one-file-redux'
import ImmerExample from './immer'
import ReduxHooks from './redux-hooks'
import MyImmutable from './my-immutable-library'
import MobXCounter from './mobx'

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
	},
	"Context compare": {
		path: "/context-compare",
		component: ContextHooks,
		visible: true,
	},
	"ConnectedComponent": {
		path: "/dev-tools-actions",
		component: ConnectedComponent,
		visible: true,
	},
	"One File Redux": {
		path: "/one-file-redux",
		component: OneFileRedux,
		visible: true,
	},
	"Immer Example": {
		path: "/immer-example",
		component: ImmerExample,
		visible: true,
	},
	"Redux Hooks": {
		path: "/redux-hooks",
		component: ReduxHooks,
		visible: true,
	},
	"My Immutable Library": {
		path: "/my-immutable",
		component: MyImmutable,
		visible: true,
  },
  "MobX Counter": {
    path: "/mobx-counter",
    component: MobXCounter,
    visible: true,
  }
};

export default routesConfig;