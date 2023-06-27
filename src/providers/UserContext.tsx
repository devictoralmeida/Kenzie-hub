import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TRegisterFormValues } from "../schemas/registerFormSchema";
import { TLoginFormValues } from "../schemas/loginFormSchema";
import { AxiosError } from "axios";
import { ITech } from "./TechsContext";

interface IUserContextProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: Date;
  updated_at: Date;
  techs: ITech[];
  works: string[];
  avatar_url: string | null;
}

interface IUserWithToken {
  user: IUser;
  token: string;
}

interface IUserContext {
  user: IUser | null;
  globalLoading: boolean;
  userLogin: (formData: TLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>; 
  userRegister: (formData: TRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
  handleLogout: () => void;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUserRegisterResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: Date;
  updated_at: Date;
  avatar_url: string | null;
}

export interface IErrorResponse {
  status: 'error';
  message: string[];
}

export const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [globalLoading, setGlobalLoading] = useState(false);

  const navigate = useNavigate();

  const currentPath = window.location.pathname;
  const localUserToken = localStorage.getItem("@TOKEN");

  useEffect(() => {
    const loadUser = async () => {
      try {
        setGlobalLoading(true);
        const { data } = await api.get<IUser>(`/profile`, {
          headers: {
            Authorization: `Bearer ${localUserToken}`,
          },
        });
        setUser(data);
        navigate(currentPath);
      } catch (error) {
        handleLogout();
      } finally {
        setGlobalLoading(false);
      }
    };

    if (localUserToken) {
      loadUser();
    }
  }, []);

  const userLogin = async (formData: TLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setLoading(true);
      const { data } = await api.post<IUserWithToken>("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      navigate(`/dashboard`);
    } catch (error) {
      const curretError = error as AxiosError<IErrorResponse>
      console.log(curretError)
      // "Usuário não encontrado, por favor tente novamente"
      toast.error(curretError.message, {
        className: "toast-error",
      });
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData: TRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setLoading(true);
      await api.post<IUserRegisterResponse>("/users", formData);
      toast.success("Usuário cadastrado com sucesso", {
        className: "toast-sucess",
      });
      navigate("/");
    } catch (error) {
      const curretError = error as AxiosError<IErrorResponse>
      console.log(curretError)
      // "Oops! Algo deu errado"
      toast.error(curretError.message, {
        className: "toast-error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, globalLoading, userLogin, userRegister, handleLogout, setGlobalLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
