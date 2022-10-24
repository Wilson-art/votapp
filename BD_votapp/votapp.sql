-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-10-2022 a las 05:27:26
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `votapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `votante`
--

CREATE TABLE `votante` (
  `codVotante` int(6) NOT NULL,
  `identificacion` int(12) NOT NULL,
  `nombres` varchar(30) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `fechaNac` date DEFAULT NULL,
  `fechaExpCed` date NOT NULL,
  `lugarNac` int(2) DEFAULT NULL,
  `lugarRes` int(2) DEFAULT NULL,
  `movil` int(10) DEFAULT NULL,
  `correo` varchar(60) NOT NULL,
  `sexo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `votante`
--

INSERT INTO `votante` (`codVotante`, `identificacion`, `nombres`, `apellidos`, `fechaNac`, `fechaExpCed`, `lugarNac`, `lugarRes`, `movil`, `correo`, `sexo`) VALUES
(2, 1005480003, 'Wilson', 'Arias', '2001-02-10', '2019-04-19', 12, 11, 0, 'arias@gmail.com', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `votante`
--
ALTER TABLE `votante`
  ADD PRIMARY KEY (`codVotante`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `votante`
--
ALTER TABLE `votante`
  MODIFY `codVotante` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
