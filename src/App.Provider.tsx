import React, { createContext, FC, useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


type AppContextType = {
    //   moodList: MoodOptionWithTimestamp[];
    //   handleSelectMood: (mood: MoodOptionType) => void;
    //   handleDeleteMood: (mood: MoodOptionWithTimestamp) => void;
};

const defaultValue = {
    //   moodList: [],
    //   handleSelectMood: () => {},
    //   handleDeleteMood: () => {},
};

const AppContext = createContext<AppContextType>(defaultValue);

export const AppProvider: FC = ({ children }) => {
    const [userInfo, setUserInfo] = React.useState([]);
    //   const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([]);

    //   const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    //     setMoodList(current => {
    //       const newValue = [...current, { mood, timestamp: Date.now() }];
    //       setAppData({ moods: newValue });
    //       return newValue;
    //     });
    //   }, []);

    //   const handleDeleteMood = React.useCallback(
    //     (mood: MoodOptionWithTimestamp) => {
    //       setMoodList(current => {
    //         const newValue = current.filter(
    //           item => item.timestamp !== mood.timestamp,
    //         );
    //         setAppData({ moods: newValue });
    //         return newValue;
    //       });
    //     },
    //     [],
    //   );

    //   React.useEffect(() => {
    //     const getDataFromStorage = async () => {
    //       const data = await getAppData();

    //       if (data) {
    //         setMoodList(data.moods);
    //       }
    //     };
    //     getDataFromStorage();
    //   }, []);

    return (
        <SafeAreaProvider>
            <AppContext.Provider
                //   value={{ moodList, handleSelectMood, handleDeleteMood }}
                value={{ userInfo }}
            >
                {children}
            </AppContext.Provider>
        </SafeAreaProvider>
    );
};

export const useAppContext = () => useContext(AppContext);
