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
    }
};

export default routesConfig;