O Tech Tracker é um site onde você pode acompanhar as tecnologias que conhece e permite atualizar seu nível de conhecimento sobre elas.

Essa aplicação consiste em uma página de login, página de cadastro de usuário e uma página de dashboard (onde apenas usuários que fizeram o login podem ter acesso). Caso o usuário já tenha feito o login e fechou o navegador, quando ele entrar novamente no site, será redirecionado automaticamente para a rota de dashboard.

O usuário (com a devida autenticação) pode criar, editar e deletar tecnologias que serão exibidas em seu Dashboard de usuário, onde na função de editar só será possível modificar o nível de aprendizado que o dev possui sobre aquela tech. E cada uma dessas funcionalidades possui um feedback visual para o usuário, que foi construído com o uso da biblioteca Toastify.

Para a gestão e validação dos dados do formulário foi utilizado as bibliotecas react hook form e zod, o uso dessas tecnologias permitem padronizar os dados que serão enviados para o backend e banco de dados.

Tecnologias utilizadas:
- React
- Styled Components
- React-Spinners
- React-Hook-Form
- React-Router-Dom
- Toastify
- Immer
- Zod
- Axios
