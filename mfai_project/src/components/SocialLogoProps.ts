import React from 'react';

/**
 * Interface pour les props des composants de logos sociaux
 */
export interface SocialLogoProps {
  /**
   * Largeur du logo (nombre ou chaîne CSS)
   * @default 24
   */
  width?: number | string;
  /**
   * Hauteur du logo (nombre ou chaîne CSS)
   * @default 24
   */
  height?: number | string;
  /**
   * Couleur de remplissage du logo
   * @default 'currentColor'
   */
  fill?: string;
  /**
   * Classes CSS à appliquer au SVG (compatible Tailwind)
   * @example "w-6 h-6 text-white hover:text-green-400"
   */
  className?: string;
  /**
   * Texte du titre pour l'infobulle et l'accessibilité
   */
  title?: string;
  /**
   * Texte alternatif pour l'accessibilité
   */
  ariaLabel?: string;
  /**
   * ID de l'élément qui étiquette ce logo (pour aria-labelledby)
   */
  ariaLabelledby?: string;
  icon: React.ElementType;
  href: string;
  label: string;
}

/**
 * Documentation des composants de logos sociaux
 *
 * Ces composants sont conçus pour être utilisés dans un environnement Next.js avec Tailwind CSS.
 * Ils supportent la personnalisation de taille, couleur et accessibilité.
 *
 * Exemples d'utilisation:
 *
 * ```tsx
 * // Utilisation simple avec taille par défaut
 * <XLogo />
 *
 * // Personnalisation de la couleur et de la taille
 * <DiscordLogo width={32} height={32} fill="#14F195" />
 *
 * // Utilisation avec Tailwind CSS
 * <MediumLogo className="w-6 h-6 text-white hover:text-green-400" />
 *
 * // Avec attributs d'accessibilité
 * <XLogo title="Suivez-nous sur X" ariaLabel="X (Twitter) logo" />
 * ```
 */ 