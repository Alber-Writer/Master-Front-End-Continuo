import React from "react";
import { getCacheLogin } from "@/core/profile/profile-business/profile-cache";

interface UserData{
  username: string,
  isLogged: boolean,
}

interface ProfileContext {
  profile: UserData;
  setProfile: (value: UserData) => void;
}

const createEmptyProfile = (): ProfileContext => ({
  profile: {
    username: "Pepe",
    isLogged: false,
  },
  setProfile: (value) => {
    console.warn("Use a Provider wrapping your code!!!");
  },
});

export const profileContext = React.createContext<ProfileContext>(
  createEmptyProfile()
);

interface Props {
  children?: React.ReactNode;
}

export const ProfileProvider: React.FC<Props> = (props: Props) => {
  const [profile, setProfile] = React.useState<UserData>({username:"Guest", isLogged:false});
  const [isLogged, username] = getCacheLogin();

  React.useEffect(()=>{
    if(isLogged){
      setProfile({username, isLogged: !!isLogged})
    }
  }, [isLogged])

  return (
    <profileContext.Provider value={{ profile, setProfile }}>
      {props.children}
    </profileContext.Provider>
  );
};

