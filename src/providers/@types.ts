import { TAddTechFormValues } from "../schemas/addTechFormSchema";
import { TEditTechFormValues } from "../schemas/editTechFormSchema";
import { TLoginFormValues } from "../schemas/loginFormSchema";
import { TRegisterFormValues } from "../schemas/registerFormSchema";

export interface ITechsContextProviderProps {
  children: React.ReactNode;
}

export interface ITechsAddResponse {
  id: string;
  title: string;
  status: "Iniciante" | "Intermediário" | "Avançado";
  user: {
    id: string;
  }
  created_at: Date;
  updated_at: Date;
}

export interface ITechsEditResponse {
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

export interface ITechsContext {
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

export interface IUserContextProviderProps {
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

export interface IUserWithToken {
  user: IUser;
  token: string;
}

export interface IUserContext {
  user: IUser | null;
  globalLoading: boolean;
  userLogin: (formData: TLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>; 
  userRegister: (formData: TRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
  handleLogout: () => void;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUserRegisterResponse {
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