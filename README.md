# zombase
3rd Person 2D arcade zombie web game
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Installing
You will need to use NodeJS and execute the npm install command on the root directory of Zombase.
You will need a simple database and a mysql service running.
Example database:
```

-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2021 a las 23:26:06
-- Versión del servidor: 5.7.17
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nodejs-zombase`
--
CREATE DATABASE IF NOT EXISTS `nodejs-zombase` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `nodejs-zombase`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `jugador` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `ronda` int(11) NOT NULL,
  `puntuacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `surname` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `phone` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `pp` varchar(1000) COLLATE utf8_spanish_ci NOT NULL,
  `acepto` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jugador` (`jugador`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`jugador`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



```

You will also need to create/set up your own config.env file in the root directory. Example CONFIG:
```DATABASE = your DB name
DATABASE_HOST = localhost
DATABASE_USER = your user
DATABASE_PASSWORD = your password
JWT_SECRET = your secret
JWT_EXPIRES_IN = Xd (X being a number of your choice)
JWT_COOKIE_EXPIRES = X (X being a number of your choice)
```
Once you have this, you can execute an npm start command on the directory with the node modules.

## Authors
* **Antonio Ruiz** - *Game design & logic, HUD, audio, game-related CSS and animations* - [AntonioRuiz96](https://github.com/AntonioRuiz96)
* **Fran Perea** - *Server-side design & operations, front end design, zombie, character, weapons & terrain image model designs* - [frxnpt](https://github.com/frxnpt)
[contributors](https://github.com/frxnpt/zombase/contributors)
