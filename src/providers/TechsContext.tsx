import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { IErrorResponse, useUserContext } from "./UserContext";
import { AxiosError } from "axios";
import { TEditTechFormValues } from "../schemas/editTechFormSchema";
import { TAddTechFormValues } from "../schemas/addTechFormSchema";

interface ITechsContextProviderProps {
  children: React.ReactNode;
}

interface ITechsAddResponse {
  id: string;
  title: string;
  status: "Iniciante" | "Intermediário" | "Avançado";
  user: {
    id: string;
  }
  created_at: Date;
  updated_at: Date;
}

interface ITechsEditResponse {
  id: string;
  title: string;
  status: "Iniciante" | "Intermediário" | "Avançado";
  created_at: Date;
  updated_at: Date;
}

export interface ITech {
  id: string;
  title: string;
  status: "Iniciante" | "Intermediário" | "Avançado";
  created_at: Date;
  updated_at: Date;
}

interface ITechsContext {
  addTech: (formData: TAddTechFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
  removeTech: (techID: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
  editTech: (techID: string, formData: TEditTechFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
  isAddModal: boolean;
  isEditModal: boolean;
  setIsAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdatedTech: React.Dispatch<React.SetStateAction<ITech | null>>;
  updatedTech: ITech | null;
  techsLits: ITech[];
}

export const TechsContext = createContext({} as ITechsContext);

export const TechsContextProvider = ({ children }: ITechsContextProviderProps) => {
  const { user } = useUserContext();
  const [techsLits, setTechsLits] = useState<ITech[]>([...user!.techs]);
  const [updatedTech, setUpdatedTech] = useState<ITech | null>(null);
  const [isAddModal, setIsAddModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const localUserToken = localStorage.getItem("@TOKEN");

  const addTech = async (formData: TAddTechFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setLoading(true);
      const { data } = await api.post<ITechsAddResponse>(`/users/techs`, formData, {
        headers: {
          Authorization: `Bearer ${localUserToken}`,
        },
      });
      setTechsLits((techsLits) => [...techsLits, data]);

      toast.success("Tecnologia criada com sucesso", {
        className: "toast-sucess",
      });
    } catch (error) {
      // "O usuário já possui essa tecnologia, basta atualiza-la"
      const curretError = error as AxiosError<IErrorResponse>
      console.log(curretError)
      toast.error(curretError.message, {
        className: "toast-error",
      });
    } finally {
      setLoading(false);
      setIsAddModal(false);
    }
  };

  const removeTech = async (techID: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setLoading(true);
      await api.delete(`/users/techs/${techID}`, {
        headers: {
          Authorization: `Bearer ${localUserToken}`,
        },
      });

      const filteredTechsList = techsLits.filter((tech) => tech.id !== techID);
      setTechsLits(filteredTechsList);

      toast.success("Tecnologia excluida com sucesso", {
        className: "toast-sucess",
      });
    } catch (error) {
      const curretError = error as AxiosError<IErrorResponse>
      console.log(curretError)
      // "Oops! Algo deu errado"
      toast.error(curretError.message, {
        className: "toast-error",
      });
    } finally {
      setIsEditModal(false);
      setLoading(false);
      setUpdatedTech(null);
    }
  };

  const editTech = async (techID: string, formData: TEditTechFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setLoading(true);
      await api.put<ITechsEditResponse>(`/users/techs/${techID}`, formData, {
        headers: {
          Authorization: `Bearer ${localUserToken}`,
        },
      });

      const newTechsList = techsLits.map((findedTech) => {
        if (findedTech.id === techID) {
          return { ...findedTech, status: formData.status };
        } else {
          return findedTech;
        }
      });

      setTechsLits(newTechsList);

      toast.success("Tecnologia atualizada com sucesso", {
        className: "toast-sucess",
      });
    } catch (error) {
      const curretError = error as AxiosError<IErrorResponse>
      console.log(curretError)
      // "Oops! Algo deu errado"
      toast.error(curretError.message, {
        className: "toast-error",
      });
    } finally {
      setIsEditModal(false);
      setLoading(false);
      setUpdatedTech(null);
    }
  };

  return (
    <TechsContext.Provider
      value={{
        addTech,
        editTech,
        removeTech,
        isAddModal,
        isEditModal,
        setIsAddModal,
        setIsEditModal,
        setUpdatedTech,
        updatedTech,
        techsLits,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};

export const useTechsContext = () => useContext(TechsContext);
