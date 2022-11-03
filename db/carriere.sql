-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 03 nov. 2022 à 10:42
-- Version du serveur : 5.7.33
-- Version de PHP : 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `carriere`
--

-- --------------------------------------------------------

--
-- Structure de la table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `street` varchar(39) COLLATE utf8_bin DEFAULT NULL,
  `complement` varchar(39) COLLATE utf8_bin DEFAULT NULL,
  `zipcode` char(5) COLLATE utf8_bin DEFAULT NULL,
  `town` varchar(39) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `concessions`
--

CREATE TABLE `concessions` (
  `id` int(11) NOT NULL,
  `name` varchar(40) COLLATE utf8_bin NOT NULL,
  `siret` char(12) COLLATE utf8_bin NOT NULL,
  `license` varchar(512) COLLATE utf8_bin NOT NULL,
  `phone` char(10) COLLATE utf8_bin DEFAULT NULL,
  `adress_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `lastname` varchar(39) COLLATE utf8_bin NOT NULL,
  `firstname` varchar(39) COLLATE utf8_bin DEFAULT NULL,
  `mail` varchar(150) COLLATE utf8_bin NOT NULL,
  `phone` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `concession_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `equipments`
--

CREATE TABLE `equipments` (
  `id` int(11) NOT NULL,
  `name` varchar(40) COLLATE utf8_bin NOT NULL,
  `width` decimal(5,3) DEFAULT NULL,
  `length` decimal(5,3) DEFAULT NULL,
  `height` decimal(5,3) DEFAULT NULL,
  `using_for` varchar(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `equipments_mines`
--

CREATE TABLE `equipments_mines` (
  `id` int(11) NOT NULL,
  `equipment_id` int(11) NOT NULL,
  `date_begin` date NOT NULL,
  `date_end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `firings`
--

CREATE TABLE `firings` (
  `id` int(11) NOT NULL,
  `horodatage` datetime NOT NULL,
  `explosive` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `tnt_power` smallint(6) NOT NULL,
  `sound` smallint(6) NOT NULL,
  `longitude` decimal(15,12) NOT NULL,
  `latitude` decimal(15,12) NOT NULL,
  `altitude` decimal(5,3) NOT NULL,
  `mine_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `impacts`
--

CREATE TABLE `impacts` (
  `id` int(11) NOT NULL,
  `ecosystem` enum('faune','flore','eau') COLLATE utf8_bin NOT NULL,
  `horodatage` date NOT NULL,
  `quality` int(11) NOT NULL,
  `mine_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `mines`
--

CREATE TABLE `mines` (
  `id` int(11) NOT NULL,
  `name` varchar(39) COLLATE utf8_bin NOT NULL,
  `longitude` decimal(15,12) NOT NULL,
  `latitude` decimal(15,12) NOT NULL,
  `concession_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `concessions`
--
ALTER TABLE `concessions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_adresses` (`adress_id`);

--
-- Index pour la table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_concessions` (`concession_id`);

--
-- Index pour la table `equipments`
--
ALTER TABLE `equipments`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `equipments_mines`
--
ALTER TABLE `equipments_mines`
  ADD PRIMARY KEY (`id`,`equipment_id`),
  ADD KEY `id_equipments` (`equipment_id`);

--
-- Index pour la table `firings`
--
ALTER TABLE `firings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_mines` (`mine_id`);

--
-- Index pour la table `impacts`
--
ALTER TABLE `impacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_mines` (`mine_id`);

--
-- Index pour la table `mines`
--
ALTER TABLE `mines`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_concessions` (`concession_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `concessions`
--
ALTER TABLE `concessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `equipments`
--
ALTER TABLE `equipments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `firings`
--
ALTER TABLE `firings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `impacts`
--
ALTER TABLE `impacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `mines`
--
ALTER TABLE `mines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `concessions`
--
ALTER TABLE `concessions`
  ADD CONSTRAINT `concessions_ibfk_1` FOREIGN KEY (`adress_id`) REFERENCES `addresses` (`id`);

--
-- Contraintes pour la table `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_ibfk_1` FOREIGN KEY (`concession_id`) REFERENCES `concessions` (`id`);

--
-- Contraintes pour la table `equipments_mines`
--
ALTER TABLE `equipments_mines`
  ADD CONSTRAINT `equipments_mines_ibfk_1` FOREIGN KEY (`id`) REFERENCES `mines` (`id`),
  ADD CONSTRAINT `equipments_mines_ibfk_2` FOREIGN KEY (`equipment_id`) REFERENCES `equipments` (`id`);

--
-- Contraintes pour la table `firings`
--
ALTER TABLE `firings`
  ADD CONSTRAINT `firings_ibfk_1` FOREIGN KEY (`mine_id`) REFERENCES `mines` (`id`);

--
-- Contraintes pour la table `impacts`
--
ALTER TABLE `impacts`
  ADD CONSTRAINT `impacts_ibfk_1` FOREIGN KEY (`mine_id`) REFERENCES `mines` (`id`);

--
-- Contraintes pour la table `mines`
--
ALTER TABLE `mines`
  ADD CONSTRAINT `mines_ibfk_1` FOREIGN KEY (`concession_id`) REFERENCES `concessions` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
