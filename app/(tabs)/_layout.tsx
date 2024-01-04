import { MaterialTopTabNavigationEventMap, MaterialTopTabNavigationOptions, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

const {Navigator} = createMaterialTopTabNavigator();

export const MaterialTobTabs = withLayoutContext<
MaterialTopTabNavigationOptions,
typeof Navigator,
TabNavigationState<ParamListBase>,
MaterialTopTabNavigationEventMap
>(Navigator);

const Layout = () => {
    return (
            <MaterialTobTabs screenOptions={{
                tabBarActiveTintColor: '#131620',
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    textTransform: 'capitalize'
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#1C87ED',
                    height: 3
                }
            }}>
                <MaterialTobTabs.Screen name="index" options={{title: 'For you'}} />
                <MaterialTobTabs.Screen name="following" options={{title: 'Following'}} />
                <MaterialTobTabs.Screen name="reactnative" options={{title: 'React Native'}} />
            </MaterialTobTabs>
    )
}

export default Layout;