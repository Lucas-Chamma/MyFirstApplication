
-- Criando Banco de dados

CREATE DATABASE IF NOT EXISTS `cadastro` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `cadastro`;



--
-- Criando tabela com o nome `lista`
--

CREATE TABLE `lista` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cpf` varchar(13) NOT NULL,
  `celular` varchar(15) NOT NULL,
  `nascimento` date NOT NULL,
  `endereco` varchar(50) NOT NULL,
  `observacao` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Inserindo 01 exemplo  
--

INSERT INTO `lista` (`id`, `nome`, `email`, `cpf`, `celular`, `nascimento`, `endereco`, `observacao`) VALUES
(92, 'Lucas de Souza Chamma', 'lucassouzachamma@hotmail.com', '04915685250', '69984113156', '2222-02-22', 'Rua mato grosso , 1928', 'oi');


ALTER TABLE `lista`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `lista`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
COMMIT;

