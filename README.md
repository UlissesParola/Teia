# TeiaC071615

Projeto desenvolvido para o desafio de frontend da TEIA/Caixa

Foi utilizado Angular 16, por ser LTS e Material para o design.

Projeto publicado no netlify: https://teia071615.netlify.app/

Considerações sobre o desenvolvimento:

- Foi criando um módulo separado para importação e exportação dos componentes Material, para melhorar a organização, além de evitar a importação separada em vários componentes.

- A lógica de acesso à API foi separada em um service.

- Foi sugerida a implanatação de paginação, mas entendi que a disposição das fotos em um grid, com scroll vertical ficaria mais adequado a proposta do que a utilização de um datatable. Dito isso, tentei implementar um carregamento por paginação, calculando a quantidade de tiles por tela, dependendo da dimensão e recalculando ativamente. Infelizmente a API disponibilizada não permitia a solicitação de mais de itens por página, embora tivesse uma sugestão na documentação de que esse seria só o default. Com essa limitação, decidi fazer o carregamento completo do json na inicialização e implemenar um lazy loading nas imagens.

- Como o json fornecia um thumnbail e um foto, adicionei os thumbnails à tela inicial, sem outros detalhes, com possibilidade de clicar na imagem e abrir a foto original, com as suas informações, em um modal.

- Implementação de filtro de pesquisa por caractere para títulos e álbuns.

- Clicar no título da página recarrega as imagens.

- Inicei a implementação de testes automatizados, mas faltou tempo. Logo, só o serviço de acesso à API está com testes.

- Criei uma interface para a Foto, visando maior consistência nos dados.

- Utilizado CI/Cd para publicação no netlify.