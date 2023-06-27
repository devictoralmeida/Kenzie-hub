import { z } from "zod";

export const editTechFormSchema = z.object({
  status: z.enum(['Iniciante', 'Intermediário', 'Avançado']).refine(value => {
    return ['Iniciante', 'Intermediário', 'Avançado'].includes(value);
  }, {
    message: 'Escolha uma das opções de níveis de habilidade',
  }),
});

export type TEditTechFormValues = z.infer<typeof editTechFormSchema>