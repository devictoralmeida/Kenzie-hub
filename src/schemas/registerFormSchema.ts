import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .nonempty("O nome é obrigatório")
      .min(2, "O nome precisa conter pelo menos 2 caracteres"),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("Digite um email válido"),
    password: z
      .string()
      .min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(/(?=.*[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*[$*&@#])/, "É necessário pelo menos um caractere especial"),
    confirm: z.string().nonempty("A confirmação de senha é obrigatória"),
    bio: z
      .string()
      .nonempty("A sua descrição é obrigatória")
      .min(10, "A sua descrição precisa ter pelo menos 10 caracteres"),
    contact: z
      .string()
      .nonempty("O contato é obrigatório")
      .min(10, "O contato precisa ter pelo menos 10 caracteres"),
    course_module: z.string().nonempty("Escolha uma das opções de módulos"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam corresponderem",
    path: ["confirm"],
  });

  export type TRegisterFormValues = z.infer<typeof registerFormSchema>;
