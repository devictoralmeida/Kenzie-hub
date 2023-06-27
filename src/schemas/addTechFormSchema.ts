import { z } from "zod";

export const addTechFormSchema = z.object({
  title: z.string().nonempty("O nome da tecnologia é obrigatório"),
  status: z.string().nonempty("Escolha uma das opções de níveis de habilidade"),
});

export type TAddTechFormValues = z.infer<typeof addTechFormSchema>;