// src/utils/starsStorage.js

/**
 * Henter lagrede stjerner for en gitt kategori fra localStorage
 * @param {string} category - Navn på kategorien (eks: '/quiz/math-intro')
 * @returns {number} - Antall stjerner (0–3)
 */
export function getStarsForCategory(category) {
  const raw = localStorage.getItem('categoryStars')
  if (!raw) return 0

  const data = JSON.parse(raw)
  return data[category] || 0
}

/**
 * Lagrer antall stjerner for en kategori, men kun hvis det er bedre enn før
 * @param {string} category - Navn på kategorien
 * @param {number} stars - Antall stjerner (1–3)
 */
export function saveStarsForCategory(category, stars) {
  const raw = localStorage.getItem('categoryStars')
  const data = raw ? JSON.parse(raw) : {}

  if (!data[category] || stars > data[category]) {
    data[category] = stars
    localStorage.setItem('categoryStars', JSON.stringify(data))
  }
}

/**
 * Henter ALLE stjerner for alle quizer fra localStorage
 * @returns {Record<string, number>} - Objekt med path → stjerner
 */
export function getAllStars() {
  const raw = localStorage.getItem('categoryStars')
  return raw ? JSON.parse(raw) : {}
}
