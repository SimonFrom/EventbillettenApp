import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import Index from "@/app/index";
import Test from "@/app/test";

const HomeRoute = () => <Index>Home page</Index>;

const TestRoute = () => <Test>Test page</Test>;


const NavTab = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'index', title: 'Home', focusedIcon: 'home-lightning-bolt', unfocusedIcon: 'home-lightning-bolt-outline'},
        { key: 'test', title: 'Test', focusedIcon: 'album' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        index: HomeRoute,
        test: TestRoute,

    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            shifting={false}
            sceneAnimationEnabled={true}
            sceneAnimationType={'shifting'}


        />
    );
};

export default NavTab;