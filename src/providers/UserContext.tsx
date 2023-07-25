import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TRegisterFormValues } from "../schemas/registerFormSchema";
import { TLoginFormValues } from "../schemas/loginFormSchema";
import { IUser, IUserContext, IUserContextProviderProps, IUserRegisterResponse, IUserWithToken } from "./@types";

export const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [globalLoading, setGlobalLoading] = useState(false);

  const navigate = useNavigate();

  const currentPath = useMemo(() => window.location.pathname, []);
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
      toast.error("Usuário não encontrado, por favor tente novamente", {
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
      toast.error("Oops! Algo deu errado", {
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
